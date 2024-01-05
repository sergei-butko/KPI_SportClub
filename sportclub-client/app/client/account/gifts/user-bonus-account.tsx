import React from 'react';

function UserBonusAccount(props:{bonuses: number}) {
    return (
        <div className='bg-gray-200 rounded w-full p-4 m-2'>
            <p className='text-center text-xl'>Bonus account: <span className='font-bold'>{props.bonuses}</span></p>
        </div>
    );
}

export default UserBonusAccount;