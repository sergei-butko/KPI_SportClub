import React from 'react';

export const metadata = {
    title: 'Sport Club | QR Code',
    description: 'QR Code page of sport club app',
}

export default function QrCodeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>{children}</>
    )
}
