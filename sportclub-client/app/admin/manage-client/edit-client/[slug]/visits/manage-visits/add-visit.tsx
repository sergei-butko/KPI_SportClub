import React, {FormEvent} from 'react';
import {postUserVisit} from "@/app/api/visits/postUserVisit";
import {userSubscriptionDto} from "@/types/dto/userSubscriptionDto";

function AddVisit(props: {
    updateCallback: () => void, userId: number, access_token: string, targetDate: string,
    activeSubscription: userSubscriptionDto | undefined
}) {
    const addVisit = async (e: FormEvent) => {
        e.preventDefault();
        if(props.activeSubscription ){
            const entryTime = new Date(`${new Date().toDateString()} ${props.activeSubscription.subscription.entry_time}`)
            const exitTime = new Date(`${new Date().toDateString()} ${props.activeSubscription.subscription.exit_time}`)
            if( new Date() < exitTime && new Date()>entryTime){
                if (props.targetDate) {
                    await postUserVisit(props.userId, props.access_token, {date: props.targetDate})
                        .then(data => {
                            alert(`Visit was successfully added added ${data.accumulatedBonuses} bonuses`)
                            props.updateCallback();
                        })
                } else {
                    alert('Visit date field is empty')
                }
            }else{
                alert('Cannot add visit due to user subscription visit time');
            }
        }else{
            alert("Cannot add visit. Client doesn't have active subscription")
        }
    }

    return (
        <button className='bg-emerald-400 rounded p-2' onClick={addVisit}>Add visit</button>
    );
}

export default AddVisit;