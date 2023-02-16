import React, { useState } from 'react'
import styled from "styled-components";
import { Btn } from '../Button/ButtonArea';


function ModalArea() {
    const [modal, setModal] = useState('none');
    const [modal2, setModal2] = useState('none');

    const OpenModal = (e) => (
        e.target.name === 'one' ? setModal('block') : setModal2('block')
    );
    // close버튼 클릭시
    const closeModal = (e) => (
        e.target.name === 'close' ? setModal('none') : setModal2('none')
    );
    return (
        <ModArea>
            <h2>Modal</h2>
            <Btn
                name='one'
                onClick={OpenModal}
                inModal
                back={'#8EA7E9'}>안요소클릭모달</Btn>
            <Btn
                name='two'
                onClick={OpenModal}
                back={'#F48484'}
                outModal>밖요소클릭모달</Btn>


            <Modaloutside modal={modal}>
                <ModalInside modal={modal}>
                    <button style={{
                        zIndex: '11111',
                    }}
                        onClick={closeModal} name={'close'}>
                        close
                    </button>
                    <button>ok</button>

                </ModalInside>
            </Modaloutside>




        </ModArea>

    )
}

export default ModalArea


const ModArea = styled.div`
    width: 100%;
    border: 5px solid yellow;
    z-index: 20;
`;

// 밖부분
const Modaloutside = styled.div`
/*  */
 display: ${(props) => props.modal};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
`;
const ModalInside = styled.div`
  display: ${(props) => props.modal};
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
     width: 300px;
    height: 300px;
    
    > button {
        margin-right: 10px;
        width: 100px;
        height: 30px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }

`;