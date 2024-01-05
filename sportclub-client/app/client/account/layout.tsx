import React from 'react';

export const metadata = {
    title: 'Sport Club | Account',
    description: 'User account page of sport club app',
}

export default function AccountLayout({
                         children,
                     }: {
    children: React.ReactNode
}) {
    return (
        <>{children}</>
    )
}
