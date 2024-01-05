import {apiBaseURL} from "@/consts";

export async function deleteUserVisit(userId: number, access_token: string, body:{ date: string }){
    return await fetch(`${apiBaseURL}/visits/${userId}`,{
        method: 'DELETE',
        headers:{
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',

        }, body: JSON.stringify(body)
    });
}