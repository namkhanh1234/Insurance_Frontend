import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ApiGetUserById } from '../../services/userService';

function Profile() {
    const userId = useParams();
    const [user, setUser] = useState({});

    const [enable, setEnable] = useState(true);
    const { toast } = useToast();

    const handleButton = (e) => {
        setEnable(false);
    };

    const GetUserById = async (id) => {
        const response = await ApiGetUserById(id);

        if (response && response.data) {
            setUser(response.data);
        }
    };

    console.log(user);

    useEffect(() => {
        GetUserById(userId.id);
    }, []);

    const handleUpdate = (e) => {
        setEnable(true);
        //call API

        toast({
            description: 'Cập nhật thành công.',
            variant: 'success',
        });
    };
    return (
        <>
            <div>
                <h3 className="text-2xl m-[20px] font-bold text-sky-600 ">THÔNG TIN CÁ NHÂN</h3>
                <div className="p-7 rounded-2xl border-2 bg-white flex flex-col items-center">
                    <div className="flex w-full justify-evenly mb-4 ">
                        <div className="w-1/4">
                            <Label>Họ tên</Label>
                            <Input type="text" disabled={enable} value={user?.fullName}></Input>
                        </div>
                        <div className="w-1/4">
                            <Label>Giới tính</Label>
                            <Select disabled={enable}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Nam" />
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
                            <Input type="text" disabled={enable} value={user?.dateOfBirth}></Input>
                        </div>
                    </div>

                    <div className="flex w-full justify-evenly">
                        <div className="w-1/4">
                            <Label>Email</Label>
                            <Input type="text" disabled={enable} value={user?.email}></Input>
                        </div>
                        <div className="w-1/4">
                            <Label>CCCD</Label>
                            <Input type="text" disabled={enable} value={user?.cardIdentification}></Input>
                        </div>
                        <div className="w-1/4">
                            <Label>Số điện thoại</Label>
                            <Input type="text" disabled={enable} value={user?.phone}></Input>
                        </div>
                    </div>

                    <div className="my-6 flex w-1/2 justify-evenly ">
                        {enable ? (
                            <Button
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                onClick={handleButton}
                            >
                                Thay đổi
                            </Button>
                        ) : (
                            <Button
                                className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700"
                                onClick={handleUpdate}
                            >
                                Lưu
                            </Button>
                        )}
                        <Button className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700">
                            Quay về
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
