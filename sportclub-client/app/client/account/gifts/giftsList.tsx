'use client'
import React, {useEffect, useState} from 'react';
import {giftDto} from "@/types/dto/giftDto";
import {getAllGifts} from "@/app/api/gifts/getAllGifts";
import Gift from "@/app/client/account/gifts/gift";

function GiftsList(props:{callback:(bonusId: number, bonusCost: number)=>void}) {
    const [gifts, setGifts] = useState<giftDto[]>();

    useEffect(()=>{
        (async function(){
            await getAllGifts()
                .then(data => setGifts(data))
        })();
    },[]);
    return (
        <div>
            <p className='text-2xl font-semibold m-2 text-sky-600'>Gifts price list</p>
            {gifts &&
                <div className='grid grid-cols-4'>
                    {gifts.sort((a, b) => { return b.isAvailable ? 1 : -1}).map(gift=>{
                        return (
                            <Gift giftsData={gift} callback={props.callback} key={gift.id}/>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default GiftsList;