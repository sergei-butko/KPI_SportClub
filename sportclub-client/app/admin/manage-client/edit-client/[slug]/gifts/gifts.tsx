'use client'
import React, {useEffect, useState} from 'react';
import {userGiftsDto} from "@/types/dto/userGiftsDto";
import {getUserGifts} from "@/app/api/user-gifts/getUserGifts";
import {useSession} from "next-auth/react";
import AvailableGifts from "@/app/admin/manage-client/edit-client/[slug]/gifts/available-gifts";
import GiftsHistory from "@/app/admin/manage-client/edit-client/[slug]/gifts/gifts-history";

function Gifts(props: { userId: number }) {
    const {data: session} = useSession();
    const [gifts, setGifts] = useState<userGiftsDto[]>([])
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false);
    const [availableGifts, setAvailableGifts] = useState<userGiftsDto[]>()
    const [giftsHistory, setGiftsHistory] = useState<userGiftsDto[]>()

    useEffect(() => {
        (async function () {
            if (session) {
                setGifts(await getUserGifts(props.userId, session.user.token));
            }
        })();
    }, [session, updateTrigger])

    useEffect(() => {
        if (gifts) {
            setAvailableGifts(gifts.filter(gift => !gift.isUsed))
            setGiftsHistory(gifts.filter(gift => gift.isUsed))
        }
    }, [gifts])

    return (
        <div>
            {session &&
                <>
                    <AvailableGifts gifts={availableGifts} access_token={session.user.token}
                                    updateCallback={() => setUpdateTrigger(prevState => !prevState)}/>
                    <GiftsHistory gifts={giftsHistory}/>
                </>
            }
        </div>
    );
}

export default Gifts;