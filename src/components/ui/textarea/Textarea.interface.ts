import { TextareaHTMLAttributes } from "react";
import { IconType } from "react-icons";


export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    placeholder: string
    Icon?: IconType
    error?: string
}
