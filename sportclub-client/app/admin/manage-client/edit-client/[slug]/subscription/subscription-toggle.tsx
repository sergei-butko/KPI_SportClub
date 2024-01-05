import React, {useState} from 'react';
import {subscriptionDto} from "@/types/dto/subscriptionDto";
import toggleIcon from '@/assets/toggle-down-icon.png'
import Image from "next/image";

function SubscriptionToggle(props: { subscription: subscriptionDto }) {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const collapse = () => {
        setIsHidden(prevState => !prevState);
    }

    return (
        <div className='border-2 p-2 bg-gray-300'>
            <div className='hover:cursor-pointer flex gap-2 items-center' onClick={collapse}>
                <p className='text-2xl underline'>{props.subscription.name}</p>
                <Image src={toggleIcon} alt='toggle' className={`w-5 h-5 ${isHidden ? '' : 'rotate-180'}`}/>
            </div>
            <div className={`p-2 ${isHidden ? 'hidden' : ''} bg-gray-200`}>
                <p><span
                    className='font-semibold'>Visit time:</span> {props.subscription.entry_time.substring(0, 5)} - {props.subscription.exit_time.substring(0, 5)}
                </p>
                <p><span className='font-semibold'>Price:</span> {props.subscription.price} uah</p>
                <p><span className='font-semibold'>Duration:</span> {props.subscription.duration} month</p>
            </div>
        </div>
    );
}

export default SubscriptionToggle;