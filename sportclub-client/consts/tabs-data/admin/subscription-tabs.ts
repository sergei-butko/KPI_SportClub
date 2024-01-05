import {TabTemplateType} from "@/types/tabTemplateType";

export const SubscriptionTabs: TabTemplateType = [
    {
        name: 'Edit subscriptions',
        hash: '#edit',
        shouldContain: 'edit'
    },
    {
        name: 'Add new subscriptions',
        hash: '#new',
        shouldContain: 'new'
    }
]