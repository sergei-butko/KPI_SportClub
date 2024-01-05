import React from 'react';

function BonusProgramInfo() {
    return (
        <div>
            <p className='text-2xl font-semibold mb-2 text-sky-600 underline'>Bonus program rules</p>
            <p className='text-xl font-semibold text-sky-500'>Clients can accumulate bonuses for visits</p>
            <p className='mb-3 text-lg'><span className='font-semibold'>1</span> visit = <span className='font-semibold'>5</span> bonuses</p>
            <p className='text-xl font-semibold text-sky-500'>Additional bonuses are accumulated for continuous visits of sport club</p>
            <p className='text-lg mb-1'>Clients get 1 additional bonus for every 4 weeks of continuous visits. Each week must have at least 2 visits of a club</p>
            <p className='text-lg mb-1'><span className='font-semibold'>4</span> weeks, at least <span className='font-semibold'>2</span> visits: 1 visit = <span className='font-semibold'>6</span> bonuses</p>
            <p className='text-lg mb-1'><span className='font-semibold'>8</span> weeks, at least <span className='font-semibold'>2</span> visits: 1 visit = <span className='font-semibold'>7</span> bonuses</p>
            <p className='text-lg mb-1'><span className='font-semibold'>12</span> weeks, at least <span className='font-semibold'>2</span> visits: 1 visit = <span className='font-semibold'>8</span> bonuses</p>
            <p className='text-lg mb-1'><span className='font-semibold'>16</span> weeks, at least <span className='font-semibold'>2</span> visits: 1 visit = <span className='font-semibold'>9</span> bonuses</p>
            <p className='text-lg mb-1'><span className='font-semibold'>20</span> weeks, at least <span className='font-semibold'>2</span> visits: 1 visit = <span className='font-semibold'>10</span> bonuses</p>
            <p className='text-lg mb-1'>* After 20 continuous weeks amount of accumulated bonuses per visit = 10</p>
            <p className='text-lg mb-3'>* If client skips visit, mentioned in plan, progress will be lost</p>
            <p className='text-xl font-semibold text-sky-500'>Gifts exchange</p>
            <p className='text-lg mb-1'>Clients can buy gifts for accumulated bonuses</p>
            <p className='text-lg mb-1'>Go to <a href='/client/account#gift-shop' className='text-sky-400 underline'>Shop</a> tab and choose desired gift</p>
            <p className='text-lg mb-1'>Gifts can be used in sport club with help of administrator</p>
        </div>
    );
}

export default BonusProgramInfo;