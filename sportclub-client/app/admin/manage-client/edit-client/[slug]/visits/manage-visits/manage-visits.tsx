import React, {useEffect, useRef} from 'react';
import AddVisit from "@/app/admin/manage-client/edit-client/[slug]/visits/manage-visits/add-visit";
import DeleteVisit from "@/app/admin/manage-client/edit-client/[slug]/visits/manage-visits/delete-visit";
import {userSubscriptionDto} from "@/types/dto/userSubscriptionDto";

function ManageVisits(props: {
    currentDate: string,
    access_token: string,
    updateCallback: () => void,
    userId: number,
    activeSubscription: userSubscriptionDto | undefined
}) {
    const visitDateRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (visitDateRef.current && props.currentDate !== '') {
            visitDateRef.current.value = props.currentDate;
        }
    }, [props.currentDate])

    return (
        <div className='border-2 border-gray-300 w-max py-3 px-4 bg-white rounded'>
            <form className='flex gap-2'>
                <input type='date' defaultValue={new Date().toISOString().substring(0, 10)} ref={visitDateRef}
                       className=''/>
                <AddVisit targetDate={props.currentDate ? props.currentDate : new Date().toISOString().substring(0, 10)}
                          access_token={props.access_token}
                          activeSubscription={props.activeSubscription}
                          updateCallback={props.updateCallback} userId={props.userId}/>
                <DeleteVisit
                    targetDate={props.currentDate ? props.currentDate : new Date().toISOString().substring(0, 10)}
                    access_token={props.access_token}
                    updateCallback={props.updateCallback} userId={props.userId}/>
            </form>
        </div>
    );
}

export default ManageVisits;