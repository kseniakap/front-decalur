import{Dispatch, FC, SetStateAction, useState } from "react"
import { IListItem } from "../admin-list/admin-list.interface"
import { useRouter } from "next/navigation"
import { TbSlideshow } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import st from "./AdminActions.module.scss"
import Modal from "@/ui/modal/Modal";
import Heading from "@/ui/heading/Heading";
import Button from "@/ui/button/Button";



interface IAdminActions extends Pick<IListItem, "editUrl" | "viewUrl">{
    removeHadler?: () => void
    showOrder: boolean | undefined,
    showMore: boolean,
    setShowMore?: Dispatch<SetStateAction<boolean>>;
}


const AdminActions: FC<IAdminActions>= ({
    editUrl,
    removeHadler,
    viewUrl,
    showOrder,
    showMore, 
    setShowMore
}) => {
    const {push} =useRouter()
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
   
  return (
    <div className={st.actions}>
        {
            viewUrl && (
                <button onClick={()=>push(viewUrl)}><TbSlideshow fontSize={25}/></button>
            )
        }   
        {
            editUrl && (
                <button onClick={()=>push(editUrl)}><CiEdit fontSize={25}/></button>
            )
        }  
        {
            removeHadler && (
                <button onClick={()=> setShowConfirmation(true)}><MdDeleteOutline fontSize={25}/></button>

            )
        }  
        {
            showOrder && setShowMore &&
            <button onClick={()=>setShowMore(!showMore)}><TbSlideshow fontSize={25}/></button>
        }   
         
        <Modal isOpen={showConfirmation} closeModal={()=>setShowConfirmation(false)}> 
            <Heading>Вы уверены, что хотите это удалить?</Heading>
            <div className={st.btns}>
                <Button onClick={removeHadler}>Удалить</Button>
                <Button variant="blue" onClick={() => setShowConfirmation(false)}>Отмена</Button>                
            </div>
        </Modal>
   
    </div>
  )
}

export default AdminActions
