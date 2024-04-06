import React, { FC } from 'react'
import { deliveryData } from './delivery.data'
import AllQuestions from '@/ui/question/Question'
import st from "./Delivery.module.scss"
import Heading from '@/ui/heading/Heading'

const Delivery: FC= () => {
  return (
   <>
     <section className={st.delivery}>
        <div className={st.block}>
            <p>Доставка осуществляется силами продавца за дополнительную плату.  Самовывоз из магазина по адресу <span>г. Кострома, ул. Сутырина 3</span> - бесплатно</p>
        </div>
        <Heading>Как сделать заказ: 4 простых шага</Heading>
        <div className={st.row}>
        {
            deliveryData.map(item=>(
            <div>
                <img src={item.icon} alt={item.text}/>
                <p>{item.text}</p>
            </div>
            ))
        }
        </div>
    </section>
    <section className={st.question}>
        <Heading>Часто задаваемые вопросы</Heading>
        <AllQuestions/>
    </section>
   </>
  )
}

export default Delivery
