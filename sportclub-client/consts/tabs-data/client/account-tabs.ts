import {TabTemplateType} from "@/types/tabTemplateType";

export const AccountTabs: TabTemplateType = [
    {
        name: 'Profile',
        hash: '#profile',
        shouldContain: 'profile'
    },
    {
        name: 'My Subscriptions',
        hash: '#subscriptions',
        shouldContain: 'subscriptions'
    },
    {
        name: 'Gifts',
        hash: '#my-gifts',
        shouldContain: 'gifts'
    },
    {
        name: 'Visit history',
        hash: '#visits',
        shouldContain: 'visits'
    }
]