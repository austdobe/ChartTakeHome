import { useState } from 'react';
import SearchModal from '../SearchModal';

import { Wrapper } from './DropdownInput.styles';

export interface IDropDownInput {
    label: string,
    options: Array<string>
}

function DropdownInput( props:IDropDownInput ) {

    const [ display, setDisplay ] = useState( 'none' )

    function handleClick() {

        if ( display == 'none' ) {

            setDisplay( 'block' )

        } else {

            setDisplay( 'none' )

        }

    }

    return (

        <Wrapper>

            <div onClick={handleClick}>

                {props.label}

            </div>

            <SearchModal display={display} ></SearchModal>
            
        </Wrapper>

    )

}

export { DropdownInput }