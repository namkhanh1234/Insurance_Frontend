import { Input } from '@/components/ui/input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

function ShowPassword({ register, name }) {
    const [typeInput, setTypeInput] = useState('password');

    const handleTypeInput = () => {
        if (typeInput == 'password') {
            setTypeInput('text');
        } else {
            setTypeInput('password');
        }
    };

    return (
        <div className="relative">
            <Input type={typeInput} placeholder="•••••••••" {...register(name)} />
            <FontAwesomeIcon
                onClick={handleTypeInput}
                className="absolute top-3 right-4"
                icon={typeInput == 'password' ? faEyeSlash : faEye}
            />
        </div>
    );
}

export default ShowPassword;
