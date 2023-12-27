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

const schema = yup
    .object({
        cost: yup.number().required('Email không được để trống'),
        description: yup.string(),
    })
    .required();
function PaymentRequest() {
    const [image, setImage] = useState();
    const [user, setUser] = useState();
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
        console.log(data);

        //call API
        const formData = new FormData();
        formData.append('description', data.description);
        formData.append('total_cost', data.cost);
        formData.append('contract_id', 1);
        //const response = await ApiInsertRequest(formData);
        // if (response) {
        // } else {
        // }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const GetUserById = async (id) => {
        const response = await ApiGetUserById(id);

        if (response && response.data) {
            setUser(response.data);
        }
    };
    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        GetUserById(userId);
    }, []);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center bg-sky-100 pb-10">
                <h3 className="text-2xl m-[20px] font-bold text-sky-600 text-center">YÊU CẦU THANH TOÁN ĐIỀU TRỊ</h3>
                <div className="flex flex-col items-center p-7 rounded-2xl border-2 bg-white">
                    <div className="flex justify-evenly w-full">
                        <div className="w-1/2 mr-2">
                            <Label>Họ tên khách hàng</Label>
                            <Input type="text" disabled defaultValue={user?.fullName} className="bg-slate-200"></Input>
                        </div>
                        <div className="w-1/2">
                            <Label>Mã hợp đồng bảo hiểm</Label>
                            <Input type="text" disabled className="bg-slate-200"></Input>
                        </div>
                    </div>

                    <div className="w-full mt-5">
                        <Label htmlFor="message">Mô tả điều trị</Label>
                        <Textarea placeholder="Nhập mô tả ở đây." id="message" {...register('description')} />
                    </div>
                    <div className="mt-5 flex w-full justify-evenly">
                        <div className="w-1/2 mr-2">
                            <Label htmlFor="picture">Ảnh hóa đơn hoặc hồ sơ bệnh án</Label>
                            <Input id="picture" type="file" accept="image/*" onChange={handleOnChange} />
                        </div>
                        <div className="w-1/2">
                            <Label>Chi phí điều trị</Label>
                            <Input type="number" min="0" placeholder="1000" step="1000" {...register('cost')}></Input>
                        </div>
                    </div>
                    {image && <img src={image.preview} className="w-full h-[30vh] mt-5"></img>}
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
        </>
    );
}

export default PaymentRequest;
