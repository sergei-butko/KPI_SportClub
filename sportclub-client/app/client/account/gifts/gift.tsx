import React from 'react';
import {giftDto} from "@/types/dto/giftDto";

function Gift(props:{giftsData: giftDto, callback: (id: number, bonuses: number)=>void}) {
    return (
        <div className='m-1 p-3 border-2 rounded border-gray-300' key={props.giftsData.id}>
            <p className='text-2xl underline mb-2'>{props.giftsData.name}</p>
            <p>{props.giftsData.description}</p>
            <p><span className='font-semibold'>Cost:</span> {props.giftsData.requiredAmountOfBonuses} bonuses</p>
            {props.giftsData.isAvailable
            ?<button className='bg-emerald-500 px-4 py-2 text-white rounded mt-2' onClick={()=>props.callback(props.giftsData.id, props.giftsData.requiredAmountOfBonuses)}>Buy</button>
            :<button className='bg-gray-200 border-gray-300 border-2 px-4 py-2 text-black rounded mt-2' disabled>Unavailable</button>
            }

        </div>
    );
}

export default Gift;