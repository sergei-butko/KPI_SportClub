'use client'
import React, {useEffect, useState} from 'react';
import {giftDto} from "@/types/dto/giftDto";
import {getAllGifts} from "@/app/api/gifts/getAllGifts";
import TabTemplate from "@/components/tab-template";
import {GiftsTabs} from "@/consts/tabs-data/admin/gifts-tabs";
import AddGift from "@/app/admin/edit-data/gifts/add-gift";
import {useSession} from "next-auth/react";
import EditGiftList from "@/app/admin/edit-data/gifts/edit-gift-list";

export default function GiftsPage() {
    const [giftsData, setGiftsData] = useState<giftDto[]>()
    const [hash, setHash] = useState<string>('#edit');
    const {data: session} = useSession();
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false);

    useEffect(() => {
        setHash(window.location.hash);
    }, [])

    useEffect(() => {
        (async function () {
            await getAllGifts()
                .then(data => setGiftsData(data))
        })();
    }, [updateTrigger])

    useEffect(() => {
        const handleHashChange = () => {
            console.log('Hash changed:', window.location.hash);
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <div>
            <p className='text-3xl font-bold text-sky-800 text-center'>Gifts</p>
            {giftsData && session &&
                <div>
                    <TabTemplate hash={hash} tabs={GiftsTabs}/>
                    <div>
                        {hash === '#new'
                            ? <AddGift access_token={session.user.token}
                                       callback={() => setUpdateTrigger(prevState => !prevState)}/>
                            : <EditGiftList giftsData={giftsData} access_token={session.user.token}
                                            callback={() => setUpdateTrigger(prevState => !prevState)}/>
                        }
                    </div>
                </div>
            }
        </div>
    );
}
