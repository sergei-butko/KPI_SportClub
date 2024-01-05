import React, {useEffect, useState} from 'react';
import {visitDto} from "@/types/dto/visitDto";
import {getUserVisits} from "@/app/api/visits/getUserVisits";
import Calendar from "@/components/calendar";
import ManageVisits from "@/app/admin/manage-client/edit-client/[slug]/visits/manage-visits/manage-visits";
import {userSubscriptionDto} from "@/types/dto/userSubscriptionDto";
import {getUserActiveSubscriptions} from "@/app/api/user-subscriptions/getUserActiveSubscription";
import WarningInlineMessage from "@/components/warning-inline-message";

function Visits(props: { userId: number, access_token: string, callback:()=>void }) {
    const [visitsData, setVisitsData] = useState<visitDto[]>([])
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [activeSubscription, setActiveSubscription] = useState<userSubscriptionDto>();

    useEffect(() => {
        (async function () {
            await getUserVisits(props.userId, props.access_token)
                .then(data => setVisitsData(data));
            await getUserActiveSubscriptions(props.userId, props.access_token)
                .then(data => setActiveSubscription(data));
        })();
    }, [updateTrigger])


    const handleDateClickCallback = (date: Date) => {
        const timeZoneOffset = date.getTimezoneOffset() * 60000;
        const targetDate = new Date(date.getTime() - timeZoneOffset).toISOString().substring(0, 10);
        setSelectedDate(targetDate);
    }

    return (
        <div>
            {visitsData &&
                <div className='flex flex-col gap-2'>
                    {activeSubscription
                        ? <p className='text-lg fon'><span className='font-semibold'>Client visit time: </span>
                            {activeSubscription.subscription.entry_time.substring(0,5)} - {activeSubscription.subscription.exit_time.substring(0,5)}
                        </p>
                        : <WarningInlineMessage textContent="Client doesn't have active subscription"/>
                    }
                    <Calendar visits={visitsData} callback={handleDateClickCallback}/>
                    <ManageVisits userId={props.userId} access_token={props.access_token} activeSubscription={activeSubscription}
                                  updateCallback={() => {setUpdateTrigger(prevState => !prevState); props.callback()}}
                                  currentDate={selectedDate}/>
                </div>
            }
        </div>
    );
}

export default Visits;