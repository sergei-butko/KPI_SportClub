'use client'
import React, {FormEvent, useRef, useState} from 'react';
import styles from "@/app/auth/login/page.module.css";
import PhoneInput from "react-phone-input-2";
import {postSignUp} from "@/app/api/auth/postSignUp";
import {useRouter} from "next/navigation";

function Signup() {
    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const lastNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const birthdayRef = useRef<HTMLInputElement | null>(null);
    const [phone, setPhone] = useState<string>();
    const router = useRouter();

    const signUp = async (e: FormEvent) => {
        e.preventDefault();
        const signUpData = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            phone: phone,
            birthday: birthdayRef.current?.value,
        }
        await postSignUp(signUpData)
            .then((data)=>{
                alert('Client account successfully created');
                router.push(`/admin/manage-client/edit-client/${data.id}#subscription`)
            })
    }

    return (
        <div className='flex flex-col items-center'>
            <div
                className={` h-max rounded-xl mt-4 bg-no-repeat ${styles.formContainer} border-violet-300 bg-white/50 w-[580px] flex flex-col items-center`}>
                <h2 className="text-center text-3xl mb-4 font-semibold text-sky-600">Create client account</h2>
                <form onSubmit={signUp} className="flex flex-col w-full">
                    <input type="text" id="fistName" name="fistName" placeholder="first name" required
                           ref={firstNameRef}
                           minLength={2}
                           className="focus:outline-none p-1 border-black border-b-2 mb-2 bg-transparent"/>
                    <input type="text" id="lastName" name="lastName" placeholder="last name" required
                           ref={lastNameRef}
                           minLength={2}
                           className="focus:outline-none p-1 border-black border-b-2 mb-2 bg-transparent"/>
                    <input type="email" id="email" name="email" placeholder="email" required
                           ref={emailRef}
                           pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                           title="Example: your.name@gmail.com"
                           className="focus:outline-none p-1 border-black border-b-2 mb-2 bg-transparent"/>
                    <input type="date" id="birthday" name="birthday" placeholder="birthday" required
                           ref={birthdayRef}
                           pattern="\d{4}-\d{2}-\d{2}"
                           className="focus:outline-none p-1 border-black border-b-2 mb-2 bg-transparent"/>
                    <PhoneInput inputClass='focus:outline-none w-full p-1 border-black border-b-2 mb-2 bg-transparent'
                                country={'ua'}
                                specialLabel=''
                                inputProps={{
                                    required: true,
                                    autoFocus: true,
                                }}
                                disableDropdown
                                onChange={phone => {
                                    setPhone(phone)
                                }}
                    />
                    <button type="submit" className="rounded-md bg-cyan-950 py-1 text-white text-lg">Create account
                    </button>
                </form>
            </div>
            <p className='text-white mt-2'>Already have an account? <a className="underline" href="/auth/login">Log
                In</a></p>

        </div>
    );
}

export default Signup;