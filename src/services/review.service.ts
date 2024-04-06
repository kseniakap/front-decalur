import { instance, axiosClassic } from "@/api/api.interceptor"
import { IReview } from "@/types/review.interface"


const REVIEWS = "reviews"

type TypeData ={
    rating: number, 
    text: string
}

export const  ReviewService = {
    async getAll(){
        return instance<IReview[]>({
            url: REVIEWS,
            method:"GET"
        })
    },     
    async leave(productId: string | number, data: TypeData){
        return instance<IReview>({
            url:`${REVIEWS}/leave/${productId}`,
            method:"POST", 
            data
        })
    }, 
    async delete(id: string | number){
        return instance<IReview>({
            url:`${REVIEWS}/${id}`,
            method:"DELETE", 
        })
    }, 
}