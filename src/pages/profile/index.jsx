import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ApiGetUserById } from '../../services/userService';
import { ApiUpdateUser } from '../../services/userService';

import { format } from 'date-fns';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        email: yup.string(),
        name: yup.string(),
        phone_number: yup.string(),
        birthday: yup.string(),
        cardID: yup.string(),
    })
    .required();

function Profile() {
    const userId = useParams();
    const [user, setUser] = useState({});

    const [enable, setEnable] = useState(true);
    const { toast } = useToast();
    const [gender, setGender] = useState('Nam');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleButton = (e) => {
        e.preventDefault();
        setEnable(false);
    };
    const formatingDated = (birthDay) => {
        if (!birthDay) return;
        const formattedDate = format(new Date(birthDay), 'yyyy-MM-dd');
        return formattedDate;
        //return dateObject;
    };

    const GetUserById = async (id) => {
        const response = await ApiGetUserById(id);

        if (response && response.data) {
            setUser(response.data);
        }
    };

    const UpdateUser = async (data) => {
        await ApiUpdateUser(data);
    };

    useEffect(() => {
        GetUserById(userId.id);
    }, []);

    const onSubmit = async (data) => {
        setEnable(true);
        data.id = parseInt(userId?.id);
        data.gender = gender;

        // call API
        try {
            UpdateUser(data);
            toast({
                description: 'Cập nhật thành công.',
                variant: 'success',
            });
        } catch (error) {
            toast({
                description: 'Các trường nhập không hợp lệ! Thử lại',
                variant: 'destructive',
            });
        }
    };

    return (
        <>
            <div className="flex flex-col items-center bg-sky-100 pb-10">
                <h3 className="text-2xl m-[20px] font-bold text-sky-600">THÔNG TIN CÁ NHÂN</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-7 rounded-2xl border-2 bg-white flex flex-col items-center w-[50vw]"
                >
                    <div className="flex justify-evenly mb-4 w-full ">
                        <div className="w-1/4">
                            <Label>Họ tên</Label>
                            <Input
                                type="text"
                                disabled={enable}
                                defaultValue={user?.fullName}
                                {...register('name')}
                            ></Input>
                        </div>
                        <div className="w-1/4">
                            <Label>Giới tính</Label>
                            <Select
                                disabled={enable}
                                onValueChange={(e) => {
                                    setGender(e);
                                }}
                                value={gender}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder={user?.sex} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Nam">Nam</SelectItem>
                                        <SelectItem value="Nữ">Nữ</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-1/4">
                            <Label>Ngày sinh</Label>
                            <Input
                                type="date"
                                disabled={enable}
                                defaultValue={formatingDated(user?.dateOfBirth)}
                                {...register('birthday')}
                            ></Input>
                        </div>
                    </div>

                    <div className="flex w-full justify-evenly">
                        <div className="w-1/4">
                            <Label>Email</Label>
                            <Input
                                type="text"
                                disabled={enable}
                                defaultValue={user?.email}
                                {...register('email')}
                            ></Input>
                        </div>
                        <div className="w-1/4">
                            <Label>CCCD</Label>
                            <Input
                                type="text"
                                disabled={enable}
                                defaultValue={user?.cardIdentification}
                                {...register('cardID')}
                            ></Input>
                        </div>
                        <div className="w-1/4">
                            <Label>Số điện thoại</Label>
                            <Input
                                type="text"
                                disabled={enable}
                                defaultValue={user?.phone}
                                {...register('phone_number')}
                            ></Input>
                        </div>
                    </div>

                    <div className="mt-8 flex w-1/2 justify-evenly ">
                        {enable ? (
                            <Button
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                type="button"
                                onClick={handleButton}
                            >
                                Thay đổi
                            </Button>
                        ) : (
                            <Button
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                type="submit"
                            >
                                Lưu
                            </Button>
                        )}
                        <Button className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700">
                            Quay về
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;
