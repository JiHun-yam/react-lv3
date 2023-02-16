import React from 'react'
import styled, { css } from "styled-components";


const ButArea = styled.div`
    width: 100%;
    height: 25%;
    
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
    height: 3rem;
    width: 5rem;
    border-radius: 15px;
    color: ${(props) => props.Color};
    background: ${(props) => props.back};
    border: none;
    border: 1px solid ${(props) => props.borderColor};
    &:hover {
    cursor: pointer;
     }
    &:active{
        opacity: 0.6;
    }   
    ${(props) =>
        props.LgBtn
        &&
        css`
      width: 10rem;
      height: 3.8rem;
    `};
    ${(props) =>
        props.mgBtn
        &&
        css`
        height: 3.4rem;
      width: 7rem;
      border: none;
    `};
   

  
`;

function ButtonArea() {
    let ButtonLabel = ['Cool Button', 'Hot Button'];


    const BtnBackcolor = (label) => {
        switch (label) {
            case 'Cool Button':
                return '#8EA7E9'
            default:
                return '#F48484';
        }
    }

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
                                back='white'
                                borderColor={BtnBackcolor(v)}
                                Color={i === 0 ? 'black' : 'red'}
                                onClick={i == 0 ? onBtnClick : onBtnClick2}
                                LgBtn
                            >
                                {i === 0 ? `${v} 🥶` : `${v} 🥵`}
                            </Btn>

                            <Btn
                                // 케이스별 백그라운드색깔 넣기 
                                back={BtnBackcolor(v)}
                                borderColor={BtnBackcolor(v)}
                                mgBtn>
                                Medium</Btn>

                            <Btn
                                back={BtnBackcolor(v)}
                                borderColor={BtnBackcolor(v)}
                                smBtn>Smail</Btn>

                        </ButtonGround>

                    )
                })
            }





        </ButArea >
    )
}

export default ButtonArea