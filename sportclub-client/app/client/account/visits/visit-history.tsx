'use client'
import React, {useEffect, useState} from 'react';
import {visitDto} from "@/types/dto/visitDto";
import {getUserVisits} from "@/app/api/visits/getUserVisits";
import {useSession} from "next-auth/react";
import Calendar from "@/components/calendar";

export default function VisitHistory() {
    const {data: session} = useSession();
    const [visitsData, setVisitsData] = useState<visitDto[]>([])

    useEffect(() => {
        (async function () {
            if(session){
                const data = await getUserVisits(session.user.id, session.user.token);
                setVisitsData(data);
            }
        })();
    }, [session])


    return (
        <div>
            {visitsData &&
                <div className='flex flex-col items-center'>
                    <Calendar
                        visits={visitsData}
                    />
                </div>
            }
        </div>
    );
}

