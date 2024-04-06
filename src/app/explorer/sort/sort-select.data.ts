import { EnumProductSort } from "@/services/product/product.types";
import { ISelectItem } from "@/ui/select/select.interface";

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
    {
        key: EnumProductSort.HIGH_PRICE,
        label: "По возрастанию"
    },
    {
        key: EnumProductSort.LOW_PRICE,
        label: "По убыванию"
    },
    {
        key: EnumProductSort.NEWEST,
        label: "Новый товар"
    },
    {
        key: EnumProductSort.OLDEST,
        label: "Старый товар"
    }
]