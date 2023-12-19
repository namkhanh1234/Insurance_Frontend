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

function Contracts() {
    return (
        <>
        <h3 className="text-2xl m-[20px] font-bold text-sky-600 uppercase text-center">Danh sách hợp đồng bảo hiểm</h3><div>
            <div className='grid grid-cols-2 gap-20 md-gap-40 m-12'>
                <div className='col_span_1 flex items-center'>
                    <Label className="whitespace-nowrap m-2">Mã khách hàng:</Label>
                    <Input
                        name="user_id"
                        readOnly
                        type="text"
                        placeholder="Mã khách hàng"
                        className="bg-sky-100 border-green-200 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
                    ></Input>
                </div>

                <div className='col_span_1 flex items-center'>
                    <Label className="whitespace-nowrap m-2">Tên khách hàng:</Label>
                    <Input
                        name="user_name"
                        readOnly
                        type="text"
                        placeholder="Họ và tên khách hàng"
                        className="bg-sky-100 border-green-200 focus:ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
                    ></Input>
                </div>
            </div>

            <div className='m-20'>
                <Table>
                    <TableCaption>Danh sách hợp đồng của khách hàng</TableCaption>
                    
                    <TableHeader>
                        <TableRow>
                        <TableHead >Số thứ tự</TableHead>
                        <TableHead >Mã hợp đồng</TableHead>
                        <TableHead >Tên người thụ hưởng</TableHead>
                        <TableHead >Trạng thái</TableHead>
                        <TableHead>Chi tiết thanh toán</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>HD0001</TableCell>
                        <TableCell>Alex Nguyễn</TableCell>
                        <TableCell>Đang kích hoạt</TableCell>
                        <TableCell>
                            <Button 
                                style={{
                                    fontWeight: 'bold',
                                    backgroundColor: '#bae6fd',
                                    color: '#075985',
                                }}>
                                Xem chi tiết
                            </Button>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </div>
        </>
    );
}

export default Contracts;
