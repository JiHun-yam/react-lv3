import React from 'react'
import styled from "styled-components";


const ButArea = styled.div`
    width: 100%;
    height: 25%;
    border: 1px solid blue;
    padding-left: 20px;
    gap: 20px;
`

const ButtonGround = styled.div`
    display:flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 7px;
`;
// 버튼 초기값 
const Btn = styled.button`
    height: 50px;
    border-radius: 15px;
    color: ${(props) => props.Color};
    border: 1px solid ${(props) => props.borderColor};
    background: ${(props) => props.back};
    :hover {
    cursor: pointer;
     }


  
`;

function ButtonArea() {
    let ButtonLabel = ['Cool Button', 'Hot Button'];



    const onBtnClick = () => {
        alert('버튼을 만들어보세요')
    }
    const onBtnClick2 = () => {
        prompt(' 어렵냐 ?');
    }



    return (
        <ButArea>
            <h1>Button</h1>

            {
                ButtonLabel.map((v, i) => {
                    return (
                        <ButtonGround key={i}>
                            <Btn
                                back='495579'
                                Color="495579"
                                onClick={i == 0 ? onBtnClick2 : onBtnClick}
                            >
                                {i === 0 ? `${v} 🥶` : `${v} 🥵`}
                            </Btn>

                            <Btn
                                Color="495579"
                                borderColor="red"
                                mgBtn>Medium</Btn>

                            <Btn
                                Color="495579"
                                borderColor="yellow"
                                smBtn>Smail</Btn>

                        </ButtonGround>

                    )
                })
            }





        </ButArea >
    )
}

export default ButtonArea