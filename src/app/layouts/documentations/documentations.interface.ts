import { NavItemModel } from "src/app/components/navigation/nav-item/nav-item.enum";

export interface NavItemType {
    model: string;
    active: boolean;
    text: string;
    icon?: string;
    link: string;
}


export let navItem: NavItemType[]= [
    {
        model: NavItemModel.navdrawer,
        active: true,
        text: 'home',
        link: 'documentations/home'
    },
    {
        model: NavItemModel.navdrawer,
        active: false,
        text: 'buttons',
        link: 'documentations/buttons'
    },
    {
        model: NavItemModel.navdrawer,
        active: false,
        text: 'forms',
        link: 'documentations/forms'
    }
]