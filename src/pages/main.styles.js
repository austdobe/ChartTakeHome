import styled from 'styled-components'

export const Wrapper = styled.div ` 
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px 20px;
    text-align: center;

`

export const Form = styled.form ` 
    display: flex;
    width: 100%;
    margin: 10px auto;
    align-items: center;
    justify-items: center;

    input {
        height:50%;
    }
    .icon{
        position: relative;
        right:50px;
        top:0;
        font-size: 25px;
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

export const CheckboxInput = styled.input` 
    width: 50px;
    height: 50px;
    border: 1px solid gray;
    text-align: center;
    margin-left: 20px;
    margin-right: 10px;
    
    .isActive {
        background-color: blue;
    }

`