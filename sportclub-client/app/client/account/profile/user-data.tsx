import React, {FormEvent, useRef} from 'react';
import {userDto} from "@/types/dto/userDto";
import {putUser} from "@/app/api/user/putUser";

function UserData(props: { userData: userDto, access_token: string }) {
    const firstNameRef = useRef<HTMLInputElement | null>(null);
    const lastNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        const userDataToUpdate = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
        }
        await putUser(props.userData.id, props.access_token, userDataToUpdate)
            .then(()=>alert("Data was successfully updated."))
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="flex flex-col">
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="firstName" className='w-20'>First Name</label>
                    <input type="text" id="firstName" name="firstName" required
                           defaultValue={props.userData.firstName}
                           ref={firstNameRef}
                           minLength={2}
                           className="h-10 focus:outline-none p-1 border-black border-b-2"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="firstName" className='w-20'>Last Name</label>
                    <input type="text" id="firstName" name="firstName" required
                           defaultValue={props.userData.lastName}
                           ref={lastNameRef}
                           minLength={2}
                           className="focus:outline-none p-1 border-black border-b-2 mb-2"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="email" className='w-20'>Email</label>
                    <input type="email" id="email" name="email" required
                           value={props.userData.email} readOnly
                           ref={emailRef}
                           pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                           title="Example: name@gmail.com"
                           className="focus:outline-none p-1 border-black border-b-2 mb-2"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="phone" className='w-20'>Phone</label>
                    <input type="tel" id="phone" name="phone" required
                           defaultValue={props.userData.phone} readOnly
                           ref={phoneRef}
                           className="focus:outline-none p-1 border-black border-b-2 mb-2"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="birthday" className='w-20'>Birthday</label>
                    <input type="date" id="phone" name="phone" required readOnly
                           value={props.userData.birthday.substring(0, 10)}
                           className="focus:outline-none p-1 border-black border-b-2 mb-2"/>
                </div>
                <div className='flex items-center gap-4 mb-2'>
                    <label htmlFor="bonuses" className='w-20'>Bonuses</label>
                    <input type="number" id="bonuses" name="bonuses" required readOnly
                           value={props.userData.bonuses}
                           className="focus:outline-none p-1 border-black border-b-2 mb-2"/>
                </div>
                <div className='flex gap-4'>
                    <button type='reset' className="rounded-md bg-slate-300 py-1 text-black text-lg w-20">Reset</button>
                    <button type="submit" className="rounded-md bg-cyan-950 py-1 text-white text-lg w-20">Save</button>
                </div>
            </form>
        </div>
    );
}

export default UserData;