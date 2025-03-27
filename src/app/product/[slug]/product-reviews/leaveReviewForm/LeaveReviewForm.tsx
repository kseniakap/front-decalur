import type{ FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IReviewFields } from '../review-fields.interface'
import { useMutation, useQueryClient } from 'react-query'
import { ReviewService } from '@/services/review.service'
import Heading from '@/ui/heading/Heading'
import Spinner from 'react-bootstrap/Spinner'
import { Rating } from 'react-simple-star-rating'
import Button from '@/ui/button/Button'
import st from "./LeaveReviewForm.module.scss"

const LeaveReviewForm:FC<{productId:number}>= ({productId}) => {
    const {register: formRegister, handleSubmit, formState:{errors}, reset, control} = useForm<IReviewFields>({
        mode: "onChange"
    })
    const queryClient = useQueryClient()
    const {mutate, isSuccess, isLoading} = useMutation(["leave review"], 
    (data: IReviewFields)=> ReviewService.leave(productId, data), 
    {
        onSuccess(){
            queryClient.refetchQueries(['get product', productId])
        }
    })

    const onSubmit: SubmitHandler<IReviewFields> = data =>{
        mutate(data)
        reset()
    }

    if(isSuccess) return <div className={st.publish}>Отзыв опубликован</div>

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading>Отставить отзыв</Heading>
                {
                    isLoading ? (
                        <Spinner/> 
                    ) : (
                        <div className={st.block}>
                           <div>
                            <Controller control={control} name="rating" render= {({field: {
                                    onChange, value
                                    }}) => (
                                    <Rating onClick={onChange} initialValue={value} SVGstyle={{
                                        display:"inline-block"
                                    }} size={20} transition/>
                                )} rules={{required:"Выставление рейтинга обязательно"}}/>
                           </div>
                            <textarea {...formRegister("text", {
                                required:"Вы забыли оставить отзыв"
                            })} placeholder='Введите свой отзыв...'/>

                            {/* Вывод всех ошибок */}
                            <div className={st.allErrors}>
                                {Object.entries(errors) && (<ul>{Object.entries(errors).map(([_,error])=>(<li>{error?.message}</li>))}</ul>)}
                            </div>
                            <div className={st.btn}>
                                <Button type='submit' variant='blue'>Оставить отзыв</Button>
                            </div>
                        </div>
                    )
                }
            </form>
        </>
    )
}

export default LeaveReviewForm