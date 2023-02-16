import React, { useState } from 'react'
import styled from "styled-components";
import { Btn } from '../Button/ButtonArea';


function ModalArea() {
    const [modal, setModal] = useState('none');
    const [modal2, setModal2] = useState('none');


    const openModal = (e) => {

    }

    return (
        <ModArea>
            <h2>Modal</h2>
            <Btn
                onClick={openModal}
                inModal
                back={'#8EA7E9'}>안요소클릭모달</Btn>
            <Btn
                onClick={openModal}
                back={'#F48484'}
                outModal>밖요소클릭모달</Btn>
        </ModArea>
    )
}

export default ModalArea


const ModArea = styled.div`
    width: 100%;
    height: 20%;
    border: 5px solid yellow;
    z-index: 20;
`