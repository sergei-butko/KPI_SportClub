import {POST} from "@/app/api/http";

export async function addUserGift(userId: number, bonusId:number, token: string){
    return await POST(`user-gifts/${userId}/${bonusId}`, token)
}