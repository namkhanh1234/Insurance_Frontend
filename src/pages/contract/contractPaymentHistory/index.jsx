import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

function ContractPaymentHistory() {
    return (
        <>
        <h3 className="text-2xl m-[20px] font-bold text-sky-600 uppercase text-center">CHI TIẾT QUÁ TRÌNH THANH TOÁN</h3><div>
            <div className="w-1/3 ml-20 ">
                <Label className="whitespace-nowrap m-2">Mã HD:</Label>
                <Input
                    name="contract_id"
                    readOnly
                    type="text"
                    placeholder="Mã hợp đồng"
                    className="bg-sky-100 border-green-200 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
                ></Input>
            </div>

            <div className='m-20'>
                <Table>
                    <TableCaption>Lịch sử thanh toán</TableCaption>
                    
                    <TableHeader>
                        <TableRow>
                        <TableHead >Kỳ</TableHead>
                        <TableHead >SĐT Thanh toán</TableHead>
                        <TableHead >Tên tài khoản thanh toán</TableHead>
                        <TableHead >Trạng thái</TableHead>
                        <TableHead>Hình thức thanh toán</TableHead>
                        <TableHead>Số tiền</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>0989123456</TableCell>
                        <TableCell>Nguyễn Văn A</TableCell>
                        <TableCell>Đã thanh toán</TableCell>
                        <TableCell>MoMo</TableCell>
                        <TableCell>780000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
        </>
    );
}

export default ContractPaymentHistory;
