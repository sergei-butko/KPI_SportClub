import {apiBaseURL} from "@/consts";
import {signOut} from "next-auth/react";

export async function GET(endpoint: string, token?: string) {
    return await fetch(`${apiBaseURL}/${endpoint}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }).then(response => {
        if (!response.ok) {
            if (response.status === 401) signOut({redirect: true, callbackUrl: '/auth/login'});
        } else {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            } else {
                return null;
            }
        }
    }).catch((error) => {
        console.log(error);
        throw error;
    });
}