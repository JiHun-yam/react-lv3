import React from 'react'

import styled from "styled-components";

const Btn = styled.button`
    padding: 0.65rem;
    :hover {
    cursor: pointer;
  }
`


function Button({ children }) {
    return (
        <Btn>{children}</Btn>
    )
}

export default Button