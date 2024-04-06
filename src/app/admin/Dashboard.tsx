"use client"

import { StatisticsService } from "@/services/statictics.service"
import Heading from "@/ui/heading/Heading"
import { FC } from "react"
import { Spinner } from "react-bootstrap"
import { useQuery } from "react-query"
import st from "./Dashboard.module.scss"
import { convertPrice } from "@/utils/convertPrice"
import "./../../assets/styles/style.scss"

const Dashboard:FC = () => {
    const {data, isFetching} = useQuery(
        ["statistics"],
        ()=>StatisticsService.getMain(),
        {
            select:({data}) => data
        }
    )
  return (
   <div className={st.dashboard}>
    <Heading>Дашборд</Heading>
    {
        isFetching ? (
            <Spinner/>
        ) : data?.length ? (
            <div className={st.wrapper}>
                {
                    data.map((item, index) =>(
                        <div  key={item.name} className={st.item}>
                            <div>{item.name}</div>
                            <p>
                                {
                                    index === data.length -1  ? convertPrice(item.value || 0) : item.value
                                }
                            </p>
                        </div>
                    ))
                }
            </div>
        ) : (
            <div>Статистика не была получена</div>
        )
    }
   </div>
  )
}

export default Dashboard