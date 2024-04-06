import type{ FC, PropsWithChildren } from "react"
import { useRef } from "react"
import ReactDOM from 'react-dom'
import st from "./Modal.module.scss"

interface IModal{
    isOpen: boolean, 
    closeModal: () =>void
}

const Modal:FC<PropsWithChildren<IModal>> = ({children, isOpen,closeModal}) => {
    const  modalRef = useRef<HTMLElement | null>(document.getElementById("modal"))

    if(!isOpen || !modalRef.current){
        return null
    }

  return  ReactDOM.createPortal(
    <div className={st.overlay}>
        <div className={st.window}>
           <button className={st.closeBtn}onClick={closeModal}>
              <span>&times;</span>
           </button>
           {children}
        </div>
    </div>,
    modalRef.current
  )
}

export default Modal