import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '@/components/ui/checkbox';
import FormatCurrency from '../../../components/FormatCurrency/FormatCurrency';
const columns = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
    },
    {
        accessorKey: 'paymentRequestId',
        header: 'Mã',
    },
    {
        accessorKey: 'totalCost',
        header: 'Tổng chi phí',
        cell: (row) => {
            return <span>{FormatCurrency(row.getValue('totalCost'))}</span>;
        },
    },
    {
        accessorKey: 'totalPayment',
        header: 'Chi phí trả',
        cell: (row) => {
            return <span>{FormatCurrency(row.getValue('totalCost'))}</span>;
        },
    },
    {
        accessorKey: 'description',
        header: 'Mô tả bệnh án',
    },
    {
        accessorKey: 'imagePaymentRequestUrl',
        header: 'Link ảnh chụp phiếu yêu cầu',
    },
    {
        accessorKey: 'requestStatus',
        header: 'Trạng thái',
        cell: (row) => {
            if (row.getValue('requestStatus') === 'Chờ xử lý') {
                return (
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCircle} className="text-red-400 " />
                        <span>Chờ xử lý</span>
                    </div>
                );
            } else {
                return (
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCircle} className=" text-green-400 " />
                        <span>Đã thanh toán</span>
                    </div>
                );
            }
        },
    },
];

export default columns;
