import {apiBaseURL} from "@/consts";

export async function deleteUserSubscription(userSubscriptionId:number, token: string){
    return await fetch(`${apiBaseURL}/user-subscription/${userSubscriptionId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });
}