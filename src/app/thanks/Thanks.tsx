import Heading from "@/ui/heading/Heading";
import { NextPage } from "next";
import MainContainer from "../MainContainer";
import Header from "@/ui/header/Header";
import Footer from "@/components/footer/Footer";

const Thanks:NextPage = ()=>{
    return (
        <MainContainer>
            <Header/>
            <Heading>Спасибо, что выбрали нас</Heading>       
            <Footer/> 
        </MainContainer>
    )
}


export default Thanks