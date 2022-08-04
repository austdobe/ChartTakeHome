import { produceWithPatches } from "immer"
import { useState } from "react"
import { Content, SliderWrapper, Wrapper, Slider } from "./alert.styles"

export interface IAlert {
    isError: boolean
    timer: number 
}

const Alert = (props:IAlert) => {
    
    return (
        <Wrapper style={{ display: props.isError ? "" : "none"}}>
            <Content>
                <h1>We recieved 0 results with that name.</h1>
                <h1> Try an alternative spelling, or new search.</h1>
                <SliderWrapper><Slider style={{width:`${props.timer}%`}}/></SliderWrapper>
            </Content>
        </Wrapper>
    )

}

export default Alert