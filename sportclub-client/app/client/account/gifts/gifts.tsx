'use client'
import React, {useEffect, useState} from 'react';
import {userDto} from "@/types/dto/userDto";
import {useSession} from "next-auth/react";
import {getUser} from "@/app/api/user/getUser";
import GiftsList from "@/app/client/account/gifts/giftsList";
import UserGifts from "@/app/client/account/gifts/userGifts";
import {addUserGift} from "@/app/api/user-gifts/addUserGift";
import UserBonusAccount from "@/app/client/account/gifts/user-bonus-account";
import TabTemplate from "@/components/tab-template";
import {UserGiftsTabs} from "@/consts/tabs-data/client/user-gifts-tabs";
import BonusProgramInfo from "@/app/client/account/gifts/bonus-program-info";

export default function Gifts() {
    const [userData, setUserData] = useState<userDto>();
    const {data: session} = useSession();
    const [updateTrigger, setUpdateTrigger] = useState<boolean>(false);
    const [hash, setHash] = useState<string>('#my-gifts')

    useEffect(()=>{
     setHash(window.location.hash)
    })

    useEffect(() => {
        (async function () {
            if (session) {
                await getUser(session.user.id, session.user.token)
                    .then(data => setUserData(data));
            }
        })();
    }, [session, updateTrigger])


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

    const callback = async (bonusId: number, bonusCost: number) => {
        if (userData && session) {
            if (userData.bonuses - bonusCost > 0) {
                await addUserGift(userData.id, bonusId, session.user.token)
                    .then(()=>{
                        alert('Gift successfully added to your account')
                        setUpdateTrigger(prevState => !prevState);
                    })
            } else {
                alert('Not enough bonuses on account')
            }
        }
    }

    return (
        <div>
            {(userData && session) &&
                <div className='flex flex-col'>
                    <UserBonusAccount bonuses={userData.bonuses}/>
                    <TabTemplate hash={hash} tabs={UserGiftsTabs}/>
                    {hash === '#my-gifts'
                        && <UserGifts userId={session.user.id} token={session.user.token} updateTriggerCallback={()=>setUpdateTrigger(prevState => !prevState)} updateTrigger={updateTrigger}/>
                    }
                    {hash === '#gifts-shop' && <GiftsList callback={callback}/>
                    }
                    {hash === '#gifts-info' && <BonusProgramInfo/>
                    }
                </div>
            }
        </div>
    );
}

