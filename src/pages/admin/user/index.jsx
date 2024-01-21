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
function UserAdmin() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
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

    return (
        <div>
            <h1 className="space-y-4">Danh sách người dùng</h1>
            <div className="my-4 flex justify-between">
                <Input placeholder="Nhập tên user" className="w-[30vw]"></Input>
                <div>
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
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Họ tên
                                    </Label>
                                    <Input id="name" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Email
                                    </Label>
                                    <Input id="username" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="password" className="text-right">
                                        Password
                                    </Label>
                                    <Input id="password" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="password" className="text-right">
                                        Số điện thoại
                                    </Label>
                                    <Input id="password" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="password" className="text-right">
                                        Giới tính
                                    </Label>
                                    <Input id="password" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="password" className="text-right">
                                        Ngày sinh
                                    </Label>
                                    <Select>
                                        <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Chọn giới tính" />
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
                                    <Label htmlFor="password" className="text-right">
                                        CCCD
                                    </Label>
                                    <Input id="password" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" className="bg-sky-600 text-base rounded-md hover:bg-sky-700">
                                    Thêm
                                </Button>
                            </DialogFooter>
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
            </div>
            <DataTable
                columns={columns}
                data={users}
                onPageChange={(pageIndex) => {
                    console.log('Current page index: ', pageIndex);
                    setCurrentPage(pageIndex);
                }}
                onPageSizeChange={(pageSize) => {
                    console.log('Page size: ', pageSize);
                    setPageSize(pageSize);
                }}
                nextPage={page?.nextPage}
                previousPage={page?.previousPage}
            />
        </div>
    );
}

export default UserAdmin;
