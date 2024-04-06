import { FC } from "react";
import { IconType } from "react-icons";
interface ISquareBtn {
    Icon: IconType,
    onClick?:() => void,
    number?: number
}

const SquareButton: FC<ISquareBtn> = ({
    Icon, onClick, number
}) =>{
    return (
        <button onClick={onClick} style={{ position:'relative'}}>
              <div style={{width: "15px", height:"15px", 
        borderRadius: "100%", backgroundColor: "gray",display:'flex', justifyContent:"center", alignItems:"center",position:"absolute", right:"-5px", top: "-5px"}}>
                {!!number ? (
                  <span style={{fontSize:"10px"}}>{number}</span>
                ):  <span  style={{fontSize:"10px"}} >0</span>} 
            </div>
            <Icon size={21}/>
        </button>

    )
}

export default SquareButton