import React from 'react';
import {userGiftsDto} from "@/types/dto/userGiftsDto";
import WarningInlineMessage from "@/components/warning-inline-message";

function GiftsHistory(props:{gifts:userGiftsDto[]|undefined}) {
    return (
        <div>
            <p className='text-xl font-bold text-sky-600'>Gifts History</p>
            {props.gifts && props.gifts.length!==0 ?
                <div>
                    {props.gifts.sort((gift, nextGift) => new Date(nextGift.usedDate).getTime() - new Date(gift.usedDate).getTime()).map(gift=>{
                        return(
                            <div className='m-1 p-3 border-2 rounded bg-white border-gray-300' key={`used${gift.id}`}>
                                <p className='text-xl'>{gift.gift.name}</p>
                                <p>{gift.gift.description}</p>
                                <p>Used date: {gift.usedDate.substring(0,10)} {(new Date(gift.usedDate).getHours()).toString().padStart(2, '0')}:{(new Date(gift.usedDate).getMinutes()).toString().padStart(2, '0')}</p>
                            </div>
                        )
                    })}
                </div>
                :<WarningInlineMessage textContent="No gifts history to show"/>
            }
        </div>
    );
}

export default GiftsHistory;