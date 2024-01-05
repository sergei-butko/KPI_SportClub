import React from 'react';
import {userGiftsDto} from "@/types/dto/userGiftsDto";
import {changeUserGiftStatus} from "@/app/api/user-gifts/changeUserGiftStatus";
import WarningInlineMessage from "@/components/warning-inline-message";

function AvailableGifts(props:{gifts:userGiftsDto[]|undefined, updateCallback:()=>void, access_token: string}) {
    async function handleGiftStatusChange(userBonusId: number) {
        await changeUserGiftStatus(userBonusId, props.access_token)
            .then(()=>{
                alert("Gift status successfully changed")
                props.updateCallback();
            });
    }

    return (
        <div>
            <p className='text-xl font-bold text-sky-600 mb-2'>Available Client Gifts</p>
            {props.gifts && props.gifts.length!==0 ?
                <div>
                    {props.gifts.map(gift=>{
                        return(
                            <div className='m-1 p-3 border-2 rounded bg-white border-gray-300' key={`used${gift.id}`}>
                                <p className='text-xl'>{gift.gift.name}</p>
                                <p>{gift.gift.description}</p>
                                {
                                    gift.gift.isAvailable
                                    ?<button className='bg-red-500 p-2 text-white rounded' onClick={()=>handleGiftStatusChange(gift.id)}>Mark As Used</button>
                                        : <button className='bg-gray-200 p-2 text-black border-2 border-gray-300 rounded' disabled>Gifts is marked unavailable</button>
                                }

                            </div>
                        )
                    })}
                </div>
                :<WarningInlineMessage textContent="User doesn't have available gifts"/>
            }
        </div>
    );
}

export default AvailableGifts;