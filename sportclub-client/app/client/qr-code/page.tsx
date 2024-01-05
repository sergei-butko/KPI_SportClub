'use client'
import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import QRCode from "qrcode.react";
import {qrCodeDataType} from "@/types/qrCodeDataType";

export default function QrCodePage() {
    const {data: session} = useSession();
    const [qrCodeData, setQrCodeData] = useState<qrCodeDataType>()

    useEffect(() => {
        if (session) {
            setQrCodeData({
                user: {
                    id: session.user.id,
                    email: session.user.email
                },
                expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000), // Set expiration time to 6 hours from now
            })
        }
    }, [session])

    return (
        <div className='flex flex-col items-center'>
            <p className='text-3xl text-sky-600 font-bold mb-4'>Personal QR Code</p>
            {qrCodeData &&
                <>
                    <QRCode value={JSON.stringify(qrCodeData)} size={300}/>
                    {/*<p className='mt-2'>Valid*/}
                    {/*    until {qrCodeData.expiresAt.getDate()}/{String(qrCodeData.expiresAt.getMonth()+1).padStart(2, '0')}/{qrCodeData.expiresAt.getFullYear()} {String(qrCodeData.expiresAt.getHours()).padStart(2, '0')}:{String(qrCodeData.expiresAt.getMinutes()).padStart(2, '0')}</p>*/}
                </>

            }
        </div>
    );
}

