'use client'

import{useState, type FC } from "react"
import { IAdminListItem } from "./admin-list.interface"
import AdminActions from "../admin-actions/AdminActions"
import { convertPrice } from "@/utils/convertPrice"
import { formatTel } from "@/utils/formatTel"
import { CiSquareCheck } from "react-icons/ci";

import st from "./AdminList.module.scss"

const AdminListItem:FC<IAdminListItem> = ({removeHadler, listItem}) => {
  const[showMore, setShowMore] = useState<boolean>(false)
  
  return (
   <>
     <div className={st.item}>
       <div className={st.wrappper}>
         {listItem?.image &&<img src={listItem?.image} alt="фото товара" />}
         <div className={st.content}>
          {
            listItem?.items.map(value => {
              if (String(value)?.startsWith('+7')) {
                return (
                  <div className={st.block}key={value}>
                    <a href={`tel:${formatTel(value)}`} key={value}>Позвонить</a>
                    <p>{value}</p>
                  </div> 
                  )
                }
                  return <div className={st.block} key={value}>{value}</div>
                })
              }
              {
                (listItem.isDiscount ||  listItem.isStock) && (
                  <div className={st.wrap}>
                    {listItem.isDiscount ? <p className={st.dicount}>Акция</p>: <p className={st.NotDicount}></p>}
                    {listItem.isStock ? <CiSquareCheck/>: null}
                 </div>
                )
              }
            
          </div>
        </div>    
        <AdminActions viewUrl={listItem.viewUrl} editUrl={listItem.editUrl} removeHadler={removeHadler} showOrder = {listItem.showOrder} showMore={showMore} setShowMore={setShowMore}/>
    </div>


    {
      showMore && (
      <div className={st.moreInfo}>
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Фотография</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Ед. изм.</th>
              <th>Общая цена</th>
            </tr>
          </thead>
          <tbody>
            {
              listItem?.ordersArrray?.map(item => (
                <tr key={item.id}>
                  <td>{item.product.name}</td>
                  <td><img src={`${process.env.SERVER_UPLOADS}/${item.product?.images[0]}`} alt="изображение товара" /></td>
                  <td>{convertPrice(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>{item.product.measure}</td>
                  <td>{convertPrice(+item.quantity * +item.price)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      )
    }
   </>
  )
}

export default AdminListItem