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
        accessorKey: 'userId',
        header: 'Mã',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'fullName',
        header: 'Họ và tên',
    },
    {
        accessorKey: 'phone',
        header: 'Số điện thoại',
    },
    {
        accessorKey: 'sex',
        header: 'Giới tính',
    },
    {
        accessorKey: 'status',
        header: 'Trạng thái',
        cell: (row) => {
            return !row.status ? (
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCircle} className=" text-green-400 " />
                    <span>Hoạt động</span>
                </div>
            ) : (
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCircle} className="text-red-400 " />
                    <span>Không hoạt động</span>
                </div>
            );
        },
    },
];

export default columns;
