import type { FC } from "react"
import { IReview } from "@/types/review.interface"
import { Rating } from "react-simple-star-rating"

import st from "./ReviewItem.module.scss"


const ReviewItem: FC<{review: IReview }> = ({review}) => {
  return (
    <div className={st.review}>
       <div className={st.top}>
          <div>
            <img src={`${process.env.SERVER_UPLOADS}${review.user.avatarPath}` } alt = {review.user.name}/>
            <p>{review.user.name}</p>
          </div>
          <Rating readonly initialValue={+review.rating} SVGstyle={{display:"inline-block"}} size={20} allowFraction transition/>
       </div>
      
        <div className="">{review.text}</div>
    </div>
  )
}

export default ReviewItem