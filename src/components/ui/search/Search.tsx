'use client'

import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import Button from "../button/Button";
import st from "./Search.module.scss"


const Search:FC = () =>{
   const {push} = useRouter()
   const [searchTerm, setSearchTerm] = useState<string>("")


    return (
       <div className={st.search}>
        <input value={searchTerm} onChange={e =>setSearchTerm(e.target.value)} placeholder="Поиск..."/>
        <Button variant="blue" size="large" onClick={()=> push(`/explorer?searchTerm=${searchTerm}`)}>Поиск</Button>
       </div>
    )
}

export default Search