import { getAdminUrl } from "@/config/url.config";
import { IMenuItem } from "./admin-menu";
import { MdDashboard } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineStoreMallDirectory } from "react-icons/md";

export const ADMIN_MENU: IMenuItem[]=[
    {
        label: "Дашборд",
        href: getAdminUrl(), 
        icon: MdDashboard
    },
    {
        label: "Товары",
        href: getAdminUrl('/products'),
        icon:MdOutlineStoreMallDirectory
    }, 
    {
        label: "Заказы",
        href: getAdminUrl('/orders'), 
        icon:IoBagCheckOutline
    },
    {
        label: "Категории",
        href: getAdminUrl('/categories'),
        icon: TbCategoryPlus
    },
    {
        label: "Отзывы",
        href: getAdminUrl('/reviews'),
        icon:MdOutlineRateReview
    }
   
]