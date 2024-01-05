import {TabTemplateType} from "@/types/tabTemplateType";

export const ManageUserTabs: TabTemplateType = [
    {
        name: 'Gifts',
        hash: '#gifts',
        shouldContain: 'gifts'
    },
    {
        name: 'Subscription',
        hash: '#subscription',
        shouldContain: 'subscription'
    },
    {
        name: 'Visits',
        hash: '#visits',
        shouldContain: 'visits'
    }
]