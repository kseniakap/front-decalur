import { FC } from "react";
import st from "./Footer.module.scss"
import Map from "../ui/map/Map";

const Footer:FC =() => {
    return (
        <footer className={st.footer}>
            <Map/>
        </footer>
    )
}

export default Footer