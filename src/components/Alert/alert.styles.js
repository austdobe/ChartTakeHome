import styled from "styled-components"

export const Wrapper = styled.div ` 
    height: 100vh; 
    width: 100vw;
    position:absolute;
    top:0;
    left:0;
    display: grid;
    justify-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
`

export const Content = styled.div ` 
    position: absolute;
    margin: 20px auto;
    width: 400px;
    color: white;
    border-radius: 10px;;
    background: linear-gradient(112.2deg, rgba(25,25,25,.7) -36.8%, rgba(25,25,25, .3) 112.3%);
    font-size: 18px;
    z-index: 99;
    padding: 10px 20px;

`

export const SliderWrapper = styled.div ` 
    width: 100%;
    height: 30px;
    border-radius: 20px;
    background-color: red;


`

export const Slider = styled.div ` 
    background-color: green;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    z-index:99

`