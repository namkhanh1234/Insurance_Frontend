import { useEffect, useState } from 'react';
import DataTable from '../../../DataTable/DataTable';
import { ApiListUser } from '../../../services/adminService';
import columns from './columns';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { ApiRegister } from '../../../services/userService';
import { useToast } from '@/components/ui/use-toast';
import { ApiSearchUser } from '../../../services/adminService';
YupPassword(yup);
const schema = yup
    .object({
        email: yup.string().required('Email không được để trống').email('Email không đúng định dạng'),
        name: yup.string().required('Họ tên không được để trống'),
        password: yup
            .string()
            .required('Mật khẩu không được để trống')
            .password()
            .min(8, 'Mật khẩu chứa ít nhất 8 kí tự')
            .minLowercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái thường')
            .minUppercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái in hoa')
            .minNumbers(1, 'Mật khẩu chứa ít nhất 1 số')
            .minSymbols(1, 'Mật khẩu chứa ít nhất 1 kí tự đặc biệt'),
        phone_number: yup.string().required('Số điện thoại không được để trống'),
        birthday: yup.string().required('Ngày sinh không được để trống'),
        id: yup.string().required('Số căn cước không được để trống'),
    })
    .required();
function UserAdmin() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [gender, setGender] = useState('Nam');
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const GetListUser = async (currentPage, size) => {
        const response = await ApiListUser(currentPage, size);
        console.log(response.data);

        await new Promise((r) => setTimeout(r, 200));
        setUsers(response.data?.data);
        setPage(response.data);
    };
    useEffect(() => {
        //call API
        GetListUser(currentPage, pageSize);
    }, [currentPage, pageSize]);

    //call add user
    const onSubmit = async (data) => {
        console.log(data);
        data.gender = gender;
        try {
            const response = ApiRegister(data);
            if (response) {
                toast({
                    description: 'Đăng ký thành công.',
                    variant: 'success',
                });
                navigate('/login');
            } else {
                toast({
                    description: 'Email này đã đăng ký! ',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                description: 'Lỗi hệ thống! ',
                variant: 'destructive',
            });
        }
    };

    const handleSearch = async (e) => {
        if (e.target.value != '') {
            const response = await ApiSearchUser(e.target.value, currentPage, pageSize);
            if (response.data?.data.length === 0) {
                toast({
                    description: 'Không tìm thấy người dùng! ',
                    variant: 'destructive',
                });
            }
            setUsers(response.data?.data);
        }

        //console.log(response.data);
    };

    return (
        <div className="relative">
            <h1 className="space-y-4">Danh sách người dùng</h1>
            <div className="my-4 flex justify-end">
                <Input onChange={handleSearch} className="mr-4"></Input>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className=" bg-sky-600 text-base rounded-md hover:bg-sky-700">
                            <PlusCircle className="mr-2" /> Thêm người dùng
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Thêm người dùng</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Họ tên
                                </Label>
                                <Input id="name" className="col-span-3" {...register('name')} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Email
                                </Label>
                                <Input id="username" className="col-span-3" {...register('email')} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="password" className="text-right">
                                    Password
                                </Label>
                                <Input id="password" className="col-span-3" {...register('password')} type="password" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone_number" className="text-right">
                                    Số điện thoại
                                </Label>
                                <Input id="phone_number" className="col-span-3" {...register('phone_number')} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="birthday" className="text-right">
                                    Ngày sinh
                                </Label>
                                <Input id="birthday" className="col-span-3" {...register('birthday')} type="date" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="password" className="text-right">
                                    Giới tính
                                </Label>
                                <Select
                                    onValueChange={(e) => {
                                        setGender(e);
                                    }}
                                >
                                    <SelectTrigger className="col-span-3">
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
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="id" className="text-right">
                                    CCCD
                                </Label>
                                <Input id="id" className="col-span-3" {...register('id')} />
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="bg-sky-600 text-base rounded-md hover:bg-sky-700">
                                    Thêm
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-red-400 text-base rounded-md hover:bg-red-700 mx-2">
                            <Trash2 className="mr-2" /> Xóa
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Bạn có thật sự muốn xóa ?</DialogTitle>
                        </DialogHeader>

                        <DialogFooter>
                            <Button className=" bg-red-400 text-base rounded-md hover:bg-red-700" type="submit">
                                Xóa
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <DataTable
                columns={columns}
                data={users}
                onPageChange={(pageIndex) => {
                    //console.log('Current page index: ', pageIndex);
                    setCurrentPage(pageIndex);
                }}
                onPageSizeChange={(pageSize) => {
                    //console.log('Page size: ', pageSize);
                    setPageSize(pageSize);
                }}
                nextPage={page?.nextPage}
                previousPage={page?.previousPage}
            />
        </div>
    );
}

export default UserAdmin;
