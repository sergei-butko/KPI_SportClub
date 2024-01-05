import {POST} from "@/app/api/http";

export async function postGift(access_token: string, body:any){
    return await POST(`gifts`, access_token, [body]);
}