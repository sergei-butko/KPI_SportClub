import React from 'react';
import {deleteUserSubscription} from "@/app/api/user-subscriptions/deleteUserSubscription";

function DeleteSubscriptionButton(props:{userSubscriptionId: number, access_token: string, callback:()=>void}) {

    async function handleClick() {
        const response = await deleteUserSubscription(props.userSubscriptionId, props.access_token);
        if(response.status === 200){
            alert('User subscription was successfully deleted')
            props.callback();
        }else{
            alert(response.status)
        }
    }

    return (
        <button className='bg-red-500 p-2 my-2 rounded text-white' onClick={handleClick}>Delete</button>
    );
}

export default DeleteSubscriptionButton;