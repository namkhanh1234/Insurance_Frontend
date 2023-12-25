import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ApiResetPassword } from '../../services/userService';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

YupPassword(yup);

const schema = yup
    .object({
        newPassword: yup
            .string()
            .required('Mật khẩu không được để trống')
            .password()
            .min(8, 'Mật khẩu chứa ít nhất 8 kí tự')
            .minLowercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái thường')
            .minUppercase(1, 'Mật khẩu chứa ít nhất 1 chữ cái in hoa')
            .minNumbers(1, 'Mật khẩu chứa ít nhất 1 số')
            .minSymbols(1, 'Mật khẩu chứa ít nhất 1 kí tự đặc biệt'),
        confirmNewPassword: yup
            .string()
            .label('confirm password')
            .required('Vui lòng nhập lại mật khẩu')
            .oneOf([yup.ref('newPassword'), null], 'Mật khẩu không khớp'),
    })
    .required();

function ResetForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const { toast } = useToast();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);

        //call API
        var email = localStorage.getItem('email');
        data.email = email;
        try {
            const response = await ApiResetPassword(data);
            if (response) {
                navigate('/login');
                toast({
                    description: 'Đổi mật khẩu mới thành công!',
                    variant: 'success',
                });
                localStorage.removeItem('email');
            } else {
                toast({
                    description: 'Nhập mã otp sai! Vui lòng thử lại.',
                    variant: 'destructive',
                });
            }
        } catch (error) {
            console.log(error);
            toast({
                description: 'Nhập mã otp sai! Vui lòng thử lại.',
                variant: 'destructive',
            });
        }
    };
    return (
        <form id="form2" className="mt-6 flex-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
                <Label htmlFor="new_password">Mật khẩu mới</Label>
                <Input
                    type="password"
                    id="new_password"
                    name="new password"
                    placeholder="•••••••••"
                    {...register('newPassword')}
                />
                <p className="text-red-600 text-xs">{errors.newPassword?.message}</p>
            </div>
            <div className="space-y-1">
                <Label htmlFor="enter_new_password">Nhập lại mật khẩu mới</Label>
                <Input
                    type="password"
                    id="enter_new_password"
                    name="enter_new_password"
                    placeholder="•••••••••"
                    {...register('confirmNewPassword')}
                />
                <p className="text-red-600 text-xs">{errors.confirmNewPassword?.message}</p>
            </div>
            <div className="my-6 flex justify-center items-center">
                <Button type="submit" className="w-[140px] h-[42px] bg-sky-600 text-base rounded-md hover:bg-sky-700">
                    Xác nhận
                </Button>
            </div>
        </form>
    );
}

export default ResetForm;
