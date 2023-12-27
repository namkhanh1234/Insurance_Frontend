import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const formatTimer = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    if (minutes <= 10) minutes = '0' + minutes;
    if (seconds <= 10) seconds = '0' + seconds;
    return minutes + ':' + seconds;
};

function Timer({ second }) {
    const [countdown, setCountdown] = useState(second);
    const timerId = useRef();
    const { toast } = useToast();

    useEffect(() => {
        console.log(countdown);
        timerId.current = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timerId.current);
            toast({
                description: 'Mã OTP đã hết hạn.',
                variant: 'destructive',
            });
        }
    }, [countdown]);

    return (
        <div>
            <p className="mx-2">{formatTimer(countdown)}</p>
        </div>
    );
}

export default Timer;
