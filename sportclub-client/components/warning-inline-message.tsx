import React from 'react';

function WarningInlineMessage(props:{textContent: string, secondaryContent?: string}) {
    return (
        <div className='border-2 rounded border-red-500 p-4 bg-red-200 w-max mb-4'>
            <p className='text-red-600 text-xl font-semibold'>{props.textContent}</p>
            <p className='text-red-600 text-lg'>{props.secondaryContent}</p>
        </div>
    );
}

export default WarningInlineMessage;