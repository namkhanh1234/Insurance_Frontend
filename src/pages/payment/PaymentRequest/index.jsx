import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        payment: yup.number().required('Email không được để trống'),
        text: yup.string(),
    })
    .required();
function PaymentRequest() {
    const [image, setImage] = useState();
    useEffect(() => {
        return () => {
            image && URL.revokeObjectURL(image.preview);
        };
    });
    const handleOnChange = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImage(file);
    };
    const onSubmit = (data) => {
        console.log(data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-2xl m-[20px] font-bold text-sky-600 text-center">YÊU CẦU THANH TOÁN ĐIỀU TRỊ</h3>
                <div className="flex flex-col ml-4 items-center">
                    <div className="flex w-1/2 justify-between">
                        <div>
                            <Label>Mã khách hàng</Label>
                            <Input type="text" disabled></Input>
                        </div>
                        <div>
                            <Label>Mã bảo hiểm</Label>
                            <Input type="text" disabled></Input>
                        </div>
                        <div>
                            <Label>Chi phí điều trị</Label>
                            <Input
                                type="number"
                                min="0"
                                placeholder="1000"
                                step="1000"
                                {...register('payment')}
                            ></Input>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <Label htmlFor="message">Mô tả điều trị</Label>
                        <Textarea placeholder="Nhập mô tả ở đây." id="message" {...register('text')} />
                    </div>
                    <div className="w-1/2 mb-5">
                        <Label htmlFor="picture">Ảnh hóa đơn hoặc hồ sơ bệnh án</Label>
                        <Input id="picture" type="file" accept="image/*" onChange={handleOnChange} />
                    </div>
                    {image && <img src={image.preview} className="w-1/2 h-96"></img>}
                    <div className="my-6 flex justify-evenly w-1/2">
                        <Button
                            className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                            type="submit"
                        >
                            Gửi
                        </Button>
                        <Button className="w-[140px] h-[42px] bg-red-600 text-base rounded-md hover:bg-red-700">
                            Hủy
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default PaymentRequest;
