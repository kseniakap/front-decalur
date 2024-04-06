import Heading from "@/ui/heading/Heading";
import Link from "next/link";
import MainContainer from "./MainContainer";
import Header from "@/ui/header/Header";

export default function NotFound(){
    return (
        <MainContainer>
            <Header/>
            <Heading>Такой страницы нет</Heading>
            <Link href="/">Вернуться на главную страницу</Link>
        </MainContainer>
    )
}