import {PUT} from "@/app/api/http/PUT";

export async function changeUserGiftStatus(userBonusId: number, token: string){
    return await PUT(`user-gifts/${userBonusId}`, token);
}