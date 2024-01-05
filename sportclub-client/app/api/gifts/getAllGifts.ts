import {GET} from "@/app/api/http";

export async function getAllGifts(){
    return await GET(`gifts`);
}