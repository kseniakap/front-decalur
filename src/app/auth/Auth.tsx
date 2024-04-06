'use client'

import { FC, useState } from "react";
import Button from "@/ui/button/Button";
import { useAuth } from "@/hooks/useAuth";
import { useActions } from "@/hooks/useActions";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEmailPassword } from "@/store/user/user.interface";
import Heading from "@/ui/heading/Heading";
import Field from "@/ui/input/Field";
import { validEmail } from "./valid-email";
import { useAuthRedirect } from "./useAuthRedirect";
import st from "./Auth.module.scss"

const Auth: FC = ()=>{
  useAuthRedirect()
  const {isLoading,status} = useAuth()
  const {login, register} = useActions()
  
  const[type, setType]= useState<'Авторизация' | 'Регистрация'>('Авторизация')
  const {register:formRegister, handleSubmit, formState:{errors}, reset} = useForm<IEmailPassword>({
    mode:'onChange'
  })

  const onSubmit:SubmitHandler<IEmailPassword> = (data)=>{
    if(type === "Авторизация")  login(data)

    else register(data)
    reset()
  }

  return(
      <section className={st.block}>
        <img src={type === "Авторизация" ? "images/authImgDecalur.png" : "images/registerImgDecalur.png"} alt="картинка в авторизации и регистрации" className={st.img}/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading>{type}</Heading>
          {
            isLoading && ( 
              <p>Загрузка...</p>)
          }
          <Field {...formRegister("email", {
            required:"Email обязателен",   
            pattern:{
              value:validEmail, 
              message:"Пожалуйста, введите правильный адрес почты"
            }   
          })}
          placeholder="Email"
          error={errors.email?.message}/>
          <Field {...formRegister("password", {
            required:"Пароль обязателен",   
            minLength:{
              value:6, 
              message:"Минимальная длина пароля 6 символов"
            }
          })}
          type="password"
          placeholder="Пароль"
          error={errors.password?.message}/>
          { type === "Авторизация"  && status && <p>{status}</p>}
          <Button size="medium" variant="blue" className="btn-lg">Войти</Button>
        </form>
        <button type="button" className="" onClick={()=>setType(type === "Авторизация" ? "Регистрация" : "Авторизация")}>
          <p>{type === "Авторизация" ? "Есть аккаунт?" : "Нет аккаунта?"}</p>
          <span>{type === "Авторизация" ? "Зарегиструйтесь" : "Создайте его"}</span>
        </button>
      </section>
  )
}

export default Auth