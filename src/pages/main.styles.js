import styled from 'styled-components'

export const FormWrapper = styled.div ` 
    text-align: center;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-auto-flow: row dense;
    justify-content: space-evenly;
    text-align: center;
    gap: 5px;
    background-color: white;
    font-size: 18px;
    margin-top: 20px;;

`

export const Wrapper = styled.div ` 
    text-align: center;
    font-size: 30px;
    background-color: #f3f6f4;

`

export const Form = styled.form ` 
    display: flex;
    width: 100%;
    margin: 10px auto;
    align-items: center;
    justify-items: center;
    h3{
        margin-left: 20px;
    }

    input {
        height:50%;
        font-size: 18px;
        border: solid 1px #bcbcbc;
        box-shadow: 1px 1px 5px 0 #bcbcbc;
        &:hover{
            border:solid 1px black;
        }
    }
    .icon{
        position: relative;
        right:30px;
        top:0;
        font-size: 20px;
        transform: rotateZ(90deg);
        color: black;

        &:hover{
            color: #bcbcbc;
        }
    }
    .Arrow {
        align-self: center;
        justify-self: center;
        margin:0 10px;
        color: black;

        &:hover{
            color: #bcbcbc;
        }
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
    width: 30%;
    text-align: center;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`

export const Checkbox = styled.div` 
    width: 25px;
    height: 25px;
    border-radius: 4px;
    text-align: center;
    margin-left: 20px;
    margin-right: 10px;
    box-shadow: 0 0 0 2px #bcbcbc;
    padding: 2px;

    div{
        height: 100%;
        width: 100%;
        border: none;
    }

    &:hover{
            box-shadow: 0 0 0 2px black;
        }

`

export const Content = styled.div ` 
    width: 100%;
    height: 100%;

`