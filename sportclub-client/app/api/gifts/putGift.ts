import {PUT} from "@/app/api/http/PUT";

export async function putGift(bonusId: number, access_token: string, body:any){
    return await PUT(`gifts/${bonusId}`, access_token, body);
}