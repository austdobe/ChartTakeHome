import styled from 'styled-components'

export const Wrapper = styled.div ` 
    width: 800px;
    height: 500px;
    border: 1px solid black;
    position: absolute;
    text-align: center;
    top:0;
    bottom:0;
    left: 0;
    right:0;
    display: grid;
    margin: auto;

`

export const Form = styled.form ` 
    display:flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: solid 1px lightgray;
`
export const FormInput = styled.input ` 
    width: 35%;
    font-size:18px;
    padding: 10px 20px;
    border-radius: 5px;
`

export const FormResults = styled.ul ` 

`

export const SubmitButton = styled.button ` 
    padding: 10px 20px;
    display:block;
    background-color: lightgray;
    border-radius: 5px;
`