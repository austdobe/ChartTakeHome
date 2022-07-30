import React from "react";
import { DropdownInput } from "../DropdownInput"

import { Wrapper, Content } from "./ChartAction.styles";

const ChartAction = () => {

    return(
        <Wrapper>
            <Content>
                <DropdownInput label="Author" options={["Bill", 'hank']}></DropdownInput>
                <DropdownInput label="Author" options={["Bill", 'hank']}></DropdownInput>
            </Content>
        </Wrapper>
    )
}

export default ChartAction