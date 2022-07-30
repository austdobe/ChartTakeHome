import React, { useState, useReducer } from "react";

import { Author, initialState } from "../../store/Author";
import { Wrapper, Form, FormInput, FormResults, SubmitButton } from "./SearchModal.styles";

export interface ISearchModal {
    display: string
}

const SearchModal = (props:ISearchModal) => {
    
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const handleFirstName = (event:any) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event:any) => {
        setLastName(event.target.value)
    }
    const handleSearchAuthors = (event:any) => {
        event.preventDefault()
        const fullName = `${firstName} ${lastName}`
        console.log(fullName)
        
    }

    return (
        <Wrapper style={{display: props.display}}>Search Modal
            <Form  onSubmit={handleSearchAuthors} >
                <FormInput placeholder="Author First Name" onChange={handleFirstName} />
                <FormInput placeholder="Author Last Name" onChange={handleLastName}/>
                <SubmitButton>Submit</SubmitButton>
            </Form>
            <FormResults>
                {/* {state.results.map(data => {
                    <li>{data}</li>
                })} */}
    
                    
            </FormResults>
        
        </Wrapper>
    )

}

export default SearchModal