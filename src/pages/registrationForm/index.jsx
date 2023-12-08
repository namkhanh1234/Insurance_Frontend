import classNames from 'classnames/bind';

import React, { useState, useEffect } from 'react';

import styles from './ContractPayment.module.scss';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function RegistrationForm() {


    return(
        <>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 bg-white">
                <div className="col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2">
                    <div className='text-3xl font-semibold text-sky-500 uppercase pb-6 mt-6 ml-6'>
                        Xác nhận đơn thanh toán
                    </div>
                    


                </div>
            </div>
        
        </>
    )

}

export default RegistrationForm;


