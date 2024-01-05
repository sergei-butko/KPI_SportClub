import {giftDto} from "@/types/dto/giftDto";

export type userGiftsDto = {
    id: number;
    isUsed: boolean;
    usedDate: string;
    gift: giftDto
}