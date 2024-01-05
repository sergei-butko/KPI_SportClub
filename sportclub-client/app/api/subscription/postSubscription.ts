import {POST} from "@/app/api/http";

export async function postSubscription(token: string, body:any){
    return await POST(`subscriptions`, token, [body])
}