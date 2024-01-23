import { useEffect, useState } from 'react';
import DataTable from '../../../DataTable/DataTable';
import { ApiListPaymentRequest } from '../../../services/adminService';
import columns from './columns';
import { Input } from '@/components/ui/input';
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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { ApiApprovePaymentRequest } from '../../../services/adminService';
import { useToast } from '@/components/ui/use-toast';

YupPassword(yup);
const schema = yup
    .object({
        payment: yup.number().required('Vui lòng nhập số tiền trả'),
    })
    .required();
function PaymentRequestAdmin() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [selectedRows, setSelectedRows] = useState([]);

    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const GetListPaymentRequest = async (currentPage, size) => {
        const response = await ApiListPaymentRequest(currentPage, size);
        console.log(response.data);

        await new Promise((r) => setTimeout(r, 200));
        setUsers(response.data?.data);
        setPage(response.data);
    };
    useEffect(() => {
        //call API
        GetListPaymentRequest(currentPage, pageSize);
    }, [currentPage, pageSize]);

    //call api
    const onSubmit = async (data) => {
        //console.log(data);
        console.log(selectedRows[0].original.paymentRequestId);

        try {
            const response = ApiApprovePaymentRequest(selectedRows[0].original.paymentRequestId, data.payment);
            if (response) {
                toast({
                    description: 'Duyệt thành công.',
                    variant: 'success',
                });
                window.location.reload();
            } else {
                toast({
                    description: 'Duyệt thất bại này',
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

    return (
        <div>
            <h1 className="space-y-4">Danh sách yêu cầu thanh toán</h1>
            <div className="my-4 flex justify-between">
                <Input placeholder="Nhập mô tả bệnh án" className="w-[30vw]"></Input>
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className=" bg-sky-600 text-base rounded-md hover:bg-sky-700">Xét duyệt</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Thêm người dùng</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="payment" className="text-right">
                                        Số tiền trả
                                    </Label>
                                    <Input id="payment" className="col-span-3" {...register('payment')} type="number" />
                                </div>
                                <DialogFooter>
                                    <Button type="submit" className="bg-sky-600 text-base rounded-md hover:bg-sky-700">
                                        Duyệt
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
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
                onSelected={(rows) => {
                    setSelectedRows(rows);
                }}
                nextPage={page?.nextPage}
                previousPage={page?.previousPage}
            />
        </div>
    );
}

export default PaymentRequestAdmin;
