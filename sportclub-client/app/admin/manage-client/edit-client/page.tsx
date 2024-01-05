'use client'
import React, {FormEvent, useState} from 'react';
import {useSession} from "next-auth/react";
import {getUserByPhoneNumber} from "@/app/api/user/getUserByPhoneNumber";
import {useRouter} from "next/navigation";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Page() {
    const {data: session} = useSession();
    const [phone, setPhone] = useState<string>()
    const router = useRouter();
    const [isValid, setIsValid] = useState(true)
    const [noFound, setNotFound] = useState(false)

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (phone && session) {
            if(phone.length < 12){
                setIsValid(false)
            }else{
                await getUserByPhoneNumber(phone, session.user.token)
                    .then(data => router.push(`/admin/manage-client/edit-client/${data.id}#visits`))
                    .catch(()=>setNotFound(true))
            }
        }
    }

    return (
        <div className='flex-col items-center flex text-3xl'>
            <p className='text-3xl font-semibold text-sky-600 mb-4'>Search by phone number</p>
            <form onSubmit={onSubmit} className='border-2 p-4 flex gap-2'>
                <PhoneInput
                    country={'ua'}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                    }}
                    disableDropdown
                    onChange={phone => {
                        setNotFound(false);
                        setIsValid(true);
                        setPhone(phone)
                    }}
                />
                <button type='submit' className='text-lg bg-emerald-400 px-2 font-semibold rounded'>Search</button>
            </form>
            <p className=' text-red-600 text-lg'>{!isValid && 'Phone number is invalid. Minimum length is 12 symbols'}</p>
            <p className=' text-red-600 text-lg'>{noFound && 'Client with such phone number not found'}</p>
        </div>
    );
}

export default Page;