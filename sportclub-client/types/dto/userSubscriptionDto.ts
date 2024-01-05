import {subscriptionDto} from "@/types/dto/subscriptionDto";

export type userSubscriptionDto = {
    id: number;
    startDate: string;
    endDate: string;
    isActive: boolean;
    subscription: subscriptionDto;
}