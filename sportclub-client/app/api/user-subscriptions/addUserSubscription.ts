import {POST} from "@/app/api/http";

export async function addUserSubscription(userId: number, subscriptionId:number, token: string){
    return await POST(`user-subscription?userId=${userId}&subscriptionId=${subscriptionId}`, token);
}