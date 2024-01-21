import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function DataTable({
    columns,
    data,
    onPageChange = null,
    pageSize = 5,
    pageIndex = 1,
    nextPage,
    previousPage,
    onPageSizeChange = null,
}) {
    const [localPageIndex, setLocalPageIndex] = useState(pageIndex);
    const [localPageSize, setLocalPageSize] = useState(pageSize);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    useEffect(() => {
        table.setPageSize(pageSize);
        setLocalPageIndex(pageIndex);
    }, []);

    const handlePagePrevious = () => {
        setLocalPageIndex(localPageIndex - 1);

        table.previousPage();
    };

    const handlePageNext = () => {
        setLocalPageIndex(localPageIndex + 1);
        table.nextPage();
    };
    useEffect(() => {
        onPageChange(localPageIndex);
    }, [localPageIndex, onPageChange]);
    useEffect(() => {
        table.setPageSize(localPageSize);
        onPageSizeChange(localPageSize);
    }, [localPageSize, onPageSizeChange]);
    return (
        <div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length}{' '}
                    row(s) selected.
                </div>
                <div className="space-x-2 flex ">
                    <Select
                        onValueChange={(e) => {
                            setLocalPageSize(e);
                        }}
                    >
                        <SelectTrigger className="w-auto">
                            <SelectValue placeholder="5" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={1}>1</SelectItem>
                                <SelectItem value={5}>5</SelectItem>
                                <SelectItem value={10}>10</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Button variant="outline" size="sm" onClick={handlePagePrevious} disabled={!previousPage}>
                        Previous
                    </Button>
                    <Button variant="outline" size="sm" onClick={handlePageNext} disabled={!nextPage}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
