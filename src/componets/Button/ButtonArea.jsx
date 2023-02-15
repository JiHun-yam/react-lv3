import React from 'react'
import styled from "styled-components";
import Button from './Button';

const ButArea = styled.div`
    width: 100%;
    height: 20%;
    border: 1px solid blue;
    padding-left: 20px;
    gap: 20px;
`

const ButtonGround = styled.div`
    display:flex;
    flex-direction: row;
    gap: 20px;
`;


function ButtonArea() {


    return (
        <ButArea>
            <h1>Button</h1>

            <ButtonGround>

                <Button onClick={() =>
                    console.log('d')}>Large Primary Button
                </Button>

                <Button>Medium</Button>

                <Button>Smail</Button>

            </ButtonGround>
        </ButArea>
    )
}

export default ButtonArea