import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import Link from 'next/link';
import { ProductService } from '@/services/product/product.service';
import { useAdminAllCategories } from '@/app/admin/categories/useAdminCategories';
import { IProduct } from "@/types/product.interface"
import { TypeProductData } from '@/services/product/product.types';
import { Spinner } from 'react-bootstrap'
import Button from './Button'
import Heading from '../heading/Heading';
import Modal from '../modal/Modal';
import Field from '../input/Field';
import Textarea from '../textarea/Textarea';
import { IoIosArrowForward } from "react-icons/io";
import st from "./ChangeProduct.module.scss";

const ChangeProduct:FC<{product: IProduct}> = ({product})=> {
  const {register: formRegister, handleSubmit, formState:{errors}, reset} = useForm<TypeProductData>({
    mode: "onChange"
  })
  const queryClient = useQueryClient()
  const [isChange, setIsChange] = useState<boolean>(false);
  const [isDiscount, setIsDiscount] = useState<boolean>(product.isDiscount)
  const [isStock, setIsStock] = useState<boolean>(product.isStock)
  const {data} = useAdminAllCategories()

  const {mutate, isSuccess, isLoading} = useMutation(["change product"], 
  (data: TypeProductData)=> ProductService.update(product.id, data), 
  {
    onSuccess(){
      queryClient.refetchQueries(['get product', product.id])
    }
  })
  // const { mutate, isSuccess, isLoading } = useMutation(["change product"],
  //   async (data: TypeProductData) => {
  //       await ProductService.update(product.id, data);
  //       queryClient.refetchQueries(['get product', product.id]);
  //     }
  // );

  

  const onSubmit: SubmitHandler<TypeProductData> = data =>{
    const formattedData: TypeProductData = {
      ...data,
      price: +data.price,
      measure: data.measure,
      categoryId: +data.categoryId, 
      isDiscount, 
      isStock
    };
    mutate(formattedData)
    reset()
  }

  if(isSuccess) return (
    <div className={st.publish}>
      <p>Товар изменен</p>
      <Link href= "/admin/products">Вернуться на страницу админа <IoIosArrowForward/></Link>
    </div>
  )  

  return (
   <>
   <Modal isOpen={isChange} closeModal={()=>setIsChange(false)}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading>Редактирование товара</Heading>
        {
          isLoading ? (
              <Spinner/>
          ) : (
            <div className={st.block}>
              <div className={st.price}>
                <Field {...formRegister("price", {
                  required:"Вы забыли указать стоимость товара"
                })}
                type='number'
                defaultValue = {product.price || ""} 
                placeholder='Стоимость товара'/>
                <select defaultValue={product.measure || ""}  {...formRegister("measure")}>
                  <option value="">ед. изм.</option>
                  <option value={"м²"}>м²</option>
                  <option value={"шт"}>шт</option>
                  <option value={"м.п"}>м.п</option>
                </select>
              </div>

              <Textarea {...formRegister("description", {
                required:"Вы забыли указать описание товара"
              })} 
              defaultValue = {product.description || ""}
              placeholder='Описание товара'/>

              <select {...formRegister("categoryId")}
                className={st.category} 
                defaultValue={product?.category?.id}>
                <option value="">Выберите категорию</option>
                {data?.map(item =>
                  <option value={item.id}>{item.items[0]}</option>
                  )}
              </select>
              <label className={st.discount}>
                Товар на акции
                <input onClick={()=> setIsDiscount(!isDiscount)}  defaultChecked={isDiscount}type="checkbox" />
              </label>
              <label  style={{marginBottom:"5px"}} className={st.discount}>
                В наличии
                <input onClick={()=> setIsStock(!isStock)}  defaultChecked={isStock} type="checkbox" />
              </label>
              {/* Вывод всех ошибок */}
              <div className={st.allErrors}>
                  {Object.entries(errors) && (<ul>{Object.entries(errors).map(([_,error])=>(<li>{error?.message}</li>))}</ul>)}
              </div>

              <Button type='submit' variant='blue'>Сохранить изменения</Button>
            </div>
          )
        }
    </form>
   </Modal>
    <Button className={st.changeBtn} onClick={()=>setIsChange(!isChange)}>
      Изменить товар
    </Button>
   </>
  )
}

export default ChangeProduct
