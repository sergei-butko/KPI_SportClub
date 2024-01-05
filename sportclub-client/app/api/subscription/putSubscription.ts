import {PUT} from "@/app/api/http/PUT";

export async function putSubscription(subscriptionId: number, token: string, body:any){
    return await PUT(`subscriptions/${subscriptionId}`, token, body)
}