import styled from 'styled-components'

export const Wrapper = styled.div ` 
    text-align: center;
    display: flex;
    grid-template-columns: auto;
    margin: auto;

`

export const Form = styled.form ` 
    display:flex;
    width: 25%;
    margin: 20px 10px;
    padding-bottom: 20px;
    .icon{
        position: relative;
        right:60px;
        top:0;
        font-size: 30px;
        transform: rotateZ(90deg);
    }
    .Arrow {
        align-self: center;
        justify-self: center;
        margin:0 10px;
        font-size: 30px;
    }
    button{
        border:none;
        background-color: transparent;
    }
`
export const FormInput = styled.input ` 
    width:  100%;
    font-size:18px;
    padding: 5px 10px;
    border-radius: 5px;
`
export const NumberInput = styled.input ` 
    width: 60%;
    text-align: center;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    

`