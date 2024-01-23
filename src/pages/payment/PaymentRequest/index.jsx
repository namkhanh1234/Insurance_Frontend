import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ApiGetUserById } from '../../../services/userService';
import { ApiInsertRequest } from '../../../services/paymentRequestService';
import FormatCurrency from '../../../components/FormatCurrency/FormatCurrency';
import ParseCurrencyToNumber from '../../../components/ParseCurrency/ParseCurrency';
import { ApiGetContractById } from '../../../services/contractService';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const schema = yup
    .object({
        cost: yup.string().required('Chi phí không được để trống'),
        description: yup.string().required('Mô tả không được để trống'),
        // photo: yup.mixed().required('Vui lòng chọn file'),
    })
    .required();

function PaymentRequest() {
    const [image, setImage] = useState();
    const [user, setUser] = useState();
    const [contract, setContract] = useState([]);
    const [contractId, setContractId] = useState();
    const { toast } = useToast();

    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview);
        };
    });

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        file.preview = URL.createObjectURL(file);
        setImage(file);
    };

    const onSubmit = async (data) => {
        //call API
        const cost = ParseCurrencyToNumber(data.cost);
        console.log(cost);
        const formData = new FormData();

        formData.append('description', data.description);
        formData.append('totalcost', cost);
        formData.append('contractId', contractId);
        formData.append('ImagePaymentRequest', image);
        console.log(image);

        const response = await ApiInsertRequest(formData);

        if (response) {
            toast({
                description: 'Đã gửi đơn yêu cầu.',
                variant: 'success',
            });
        } else {
            toast({
                description: 'Gửi đơn không thành công.',
                variant: 'destructive',
            });
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        resolver: yupResolver(schema),
    });
    const costValue = watch('cost');
    const GetUserById = async (id) => {
        const response = await ApiGetUserById(id);

        if (response && response.data) {
            setUser(response.data);
        }
    };

    const GetContractById = async (id) => {
        const response = await ApiGetContractById(id);

        if (response && response.data) {
            console.log(response.data);
            if (response.data.length <= 0) {
                toast({
                    description: 'Bạn chưa có hợp đồng nào.',
                    variant: 'destructive',
                });
            } else {
                setContract(response.data);
            }
        }
    };

    const handleInsuranceCode = (e) => {
        console.log(e);

        // find contractId by insuranceCode
        const ct = contract.find((item) => item.insuranceCode === e);
        console.log(ct.contractId);
        setContractId(ct.contractId);
    };

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        GetUserById(userId);
        GetContractById(userId);
    }, []);

    return (
        <>
            <div className="p-6 mx-[140px]">
                <div>
                    <h3 className="text-2xl m-2 font-bold text-sky-600 text-center">YÊU CẦU THANH TOÁN ĐIỀU TRỊ</h3>
                </div>
                <div className="p-6 grid gap-4 grid-cols-1 lg:grid-cols-2 border-2 rounded-xl">
                    <div className="border-4 border-cyan-600 rounded-lg">
                        {image && <img src={image.preview} className="w-full h-full p-2"></img>}
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                            <div className="flex flex-col items-center bg-white">
                                <div className="flex justify-evenly w-full">
                                    <div className="w-1/2 mr-2">
                                        <Label>Họ tên khách hàng</Label>
                                        <Input
                                            type="text"
                                            disabled
                                            defaultValue={user?.fullName}
                                            className="bg-slate-200"
                                        ></Input>
                                    </div>
                                    <div className="w-1/2">
                                        <Label>Mã hợp đồng bảo hiểm</Label>
                                        <Select onValueChange={handleInsuranceCode}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Chọn mã bảo hiểm" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {contract.map((item, index) => (
                                                        <SelectItem key={index} value={item.insuranceCode}>
                                                            {item.insuranceCode}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="w-full mt-5">
                                    <Label htmlFor="message">Mô tả điều trị</Label>
                                    <Textarea
                                        placeholder="Nhập mô tả ở đây."
                                        id="message"
                                        {...register('description')}
                                    />
                                </div>
                                <div className="mt-5 flex w-full justify-evenly">
                                    <div className="w-1/2 mr-2">
                                        <Label htmlFor="picture">Ảnh hóa đơn hoặc hồ sơ bệnh án</Label>
                                        <Input
                                            id="picture"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleOnChange}
                                            // {...register('photo')}
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <Label>Chi phí điều trị</Label>
                                        <Input
                                            type="text"
                                            placeholder="1000"
                                            {...register('cost')}
                                            value={costValue}
                                            onChange={(e) => {
                                                setValue('cost', e.target.value);
                                                console.log(costValue);
                                            }}
                                            onBlur={(e) => {
                                                setValue('cost', FormatCurrency(e.target.value));
                                            }}
                                        ></Input>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-evenly w-full">
                                    <Button
                                        className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                        type="submit"
                                    >
                                        Gửi
                                    </Button>
                                    <Button className="w-[140px] h-[42px] bg-red-600 text-base rounded-md hover:bg-red-700">
                                        Quay về
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentRequest;
