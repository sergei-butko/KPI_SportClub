import React from 'react';

export const metadata = {
    title: 'Sport Club | Bonuses',
    description: 'Bonuses page of sport club app',
}

export default function BonusesLayout({
                                          children,
                                      }: {
    children: React.ReactNode
}) {
    return (
        <div className='container mx-auto'>{children}</div>
    )
}

