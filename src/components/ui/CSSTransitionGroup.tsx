import { Children, PropsWithChildren, cloneElement, useRef } from "react";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
import {CSSTransition as _CSSTransition} from "react-transition-group"

const CSSTransition = (props:PropsWithChildren<CSSTransitionProps>) =>{
    const nodeRef = useRef(null)
    return (
        <_CSSTransition {...props} nodeRef={nodeRef}>
            <>
                {
                    Children.map(props.children, child =>{
                        //@ts-ignore
                        return cloneElement(child, {ref: nodeRef})
                    })
                }
            </>
        </_CSSTransition>
    )
}
export default CSSTransition