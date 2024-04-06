import type{ FC } from "react"
import { IListItem } from "./admin-list.interface"
import AdminListItem from "./AdminListItem"
import st from "./AdminList.module.scss"
interface IAdminList{
    listItems?: IListItem[]
    isLoading: boolean
    removeHadler?: (id:number) => void
    // mutateUpdate?: (id:number) => void
}

const AdminList:FC<IAdminList>= ({isLoading, removeHadler, listItems= [] }) => {
   
  return (
    <div className={st.wrapper}>
        {
            isLoading ? (
               <p>Загрузка данных...</p>
            ) : listItems.length ? (
                listItems.map((item, i) =>(
                    <AdminListItem key={i}
                    removeHadler={removeHadler ? () => removeHadler(item.id)
                    : undefined
                    }
                    listItem={item}
                    />
                ))
            ) : (<div>Данные не были найдены</div>)
        }
     
    </div>
  )
}

export default AdminList