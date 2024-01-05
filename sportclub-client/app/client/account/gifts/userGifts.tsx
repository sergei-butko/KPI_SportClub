'use client'
import React, {useEffect, useState} from 'react';
import {userGiftsDto} from "@/types/dto/userGiftsDto";
import {getUserGifts} from "@/app/api/user-gifts/getUserGifts";
import WarningInlineMessage from "@/components/warning-inline-message";
import GiftsHistory from "@/app/admin/manage-client/edit-client/[slug]/gifts/gifts-history";
import {deleteUserGift} from "@/app/api/user-gifts/deleteUserGift";

function UserGifts(props: { userId: number, token: string,updateTrigger:boolean, updateTriggerCallback:()=>void }) {
    const [gifts, setGifts] = useState<userGiftsDto[]>([])
    const [availableGifts, setAvailableGifts] = useState<userGiftsDto[]>([])
    const [giftsHistory, setGiftsHistory] = useState<userGiftsDto[]>([])

    useEffect(() => {
        (async function () {
            await getUserGifts(props.userId, props.token)
                .then(data => setGifts(data));
        })();
    }, [props.updateTrigger])

    useEffect(() => {
        if (gifts && gifts.length !== 0) {
            setAvailableGifts(gifts.filter((gift) => !gift.isUsed))
            setGiftsHistory(gifts.filter((gift) => gift.isUsed))
        }
    }, [gifts])

    const handleDelete = async (userGiftId: number) => {
        await deleteUserGift(props.userId, userGiftId, props.token)
            .then(() => {
                alert('Gift successfully deleted')
                props.updateTriggerCallback()
            })
    }

    return (
        <div>
            <p className='text-xl font-bold m-2 text-sky-600'>Available Gifts</p>
            <div>
                {availableGifts.length !== 0 ?
                    <div>
                        {availableGifts.map(userGift => {
                            return (
                                <div className='mb-2 p-5 border-2 rounded border-emerald-400' key={userGift.id}>
                                    <p className='text-xl'>{userGift.gift.name}</p>
                                    <p>{userGift.gift.description}</p>
                                    {!userGift.gift.isAvailable &&
                                        <p className='text-red-600'>This gift is not available anymore. Wait for updates
                                            or delete it. If you delete gift, bonuses
                                            will be returned to your account</p>}
                                    <button className='px-4 py-2 bg-red-500 rounded font-semibold text-white' onClick={()=>handleDelete(userGift.id)}>Delete</button>
                                </div>
                            )
                        })}
                    </div>
                    : <WarningInlineMessage textContent="You don't have any available gifts"
                                            secondaryContent="Check out shop tab"/>
                }
            </div>
            <GiftsHistory gifts={giftsHistory}/>
        </div>
    );
}

export default UserGifts;