
import Button from "@/ui/button/Button";
import { FC } from "react";

interface IPagination {
    numberPages: number, 
    changePage: (page: string) => void
    currentPage?: number | string
}


const Pagination: FC<IPagination> = ({
    numberPages, changePage, currentPage
})=>{
    return (
        <div style={{display: "flex", gap:"30px", justifyContent:"center"}}>
            {
                Array.from({length:numberPages ? numberPages + 1 : 1}).map((_, index)=>{
                    const pageNumber = (index + 1).toString()
                    return(
                        <Button key={pageNumber} 
                            variant = {currentPage === pageNumber ? "blue" : "gray"}
                            onClick = {()=> changePage(pageNumber)}
                            disabled= {currentPage === pageNumber}
                            >
                          {pageNumber}
                        </Button>
                    )
                    }
                )
            }
        </div>
    )
}

export default Pagination