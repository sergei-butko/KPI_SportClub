import React from 'react';

export const metadata = {
    title: 'Sport Club | Qr Code Scanner',
    description: 'Qr Code Scanner page of sport club app',
}

export default function QrCodeScannerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>{children}</>
    )
}
