import type{ FC } from 'react';
import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import st from "./Map.module.scss"

const Map:FC= () => (
    <div className={st.map}>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad0378b79528b7637a79ef79c84c1966b77883e365e859e05e3ad217643ef809e&amp;source=constructor"  ></iframe>
        <div className={st.block}>
            <address>г. Кострома, ул. Сутырина 3</address>
            <a href="tel:89610080001">+7 (961) 008-00-01</a>
            <p>Пн-вс: 09.00 - 21.00</p>
           <div className={st.social}>
             <a href="https://t.me/decalur "><PiTelegramLogoLight fontSize={24}/></a>
             <a href="https://vk.com/decalur"><SlSocialVkontakte fontSize={24} /></a>
           </div>
        </div>
    </div>
);

export default Map;