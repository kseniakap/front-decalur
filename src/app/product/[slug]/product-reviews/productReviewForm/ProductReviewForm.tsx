import { useAuth } from "@/hooks/useAuth";
import { IReview } from "@/types/review.interface";
import Modal from "@/ui/modal/Modal";
import { useState } from "react";
import LeaveReviewForm from "../leaveReviewForm/LeaveReviewForm";
import ReviewItem from "@/ui/reviewItem/ReviewItem";
import Button from "@/ui/button/Button";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import st from "./ProductReviewForm.module.scss"
import { useProfile } from "@/hooks/useProfile";

interface IProductReviews{
    reviews: IReview[]
    productId: number
}
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };
  

export default function ProductReviews({reviews, productId}: IProductReviews){
    const [openModal, setOpenModal] = useState(false)
    const {user} = useAuth();
    const {profile} = useProfile()

    // if(!reviews.length) return null
    return (
        <section>
            <div className={st.head}>
                {
                    profile && profile?.name && (
                        <Button variant="gray" onClick={()=>setOpenModal(true)}>Оставить отзыв</Button>
                    )
                }
            </div>
            {/* Модальное окно */}
            {
                user && (
                    <Modal isOpen={openModal} closeModal={()=>setOpenModal(false)}>
                        <LeaveReviewForm productId={productId}/>
                    </Modal>
                )
            }
            <Carousel responsive={responsive} >
                {
                reviews.map(review =>
                    <ReviewItem key ={review.id} review={review}/>)
                }
            </Carousel>
        </section>
    )
}