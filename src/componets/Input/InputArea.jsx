import React, { useState } from 'react'
import styled from "styled-components";


const InpArea = styled.div`
    width: 60%;
    height: 20%;
    border: 1px solid green;
    padding-left: 20px;


    >label{
        text-align: center;
        padding-right: 10px;
        
    }
`;


const Input = styled.input`
    padding: 0.5rem 1rem;
    border-radius: 10px; 
`;


function InputArea() {

    let [name, setName] = useState('');
    let [price, setPrice] = useState(0);

    const onChangeNameHandelr = (e) => {
        setName(e.target.value)
    }

    const onChangePrcieHandelr = (e) => {
        setPrice(e.target.value)
    }



    const FormInputBoxHandler = (event) => {
        console.log('d')
        event.preventdefault()
        console.log('d')
    }

    return (
        <InpArea>
            <form action="/">

                <h1>Input</h1><br />
                <label>이름</label> &nbsp;
                <Input
                    value={name}
                    onChange={onChangeNameHandelr}
                ></Input>
                <label style={{ paddingLeft: '10px', }}>가격</label> &nbsp;
                <Input
                    value={price}
                    onChange={onChangePrcieHandelr}></Input>

                <button >ㅇㅇ</button>

            </form>
        </InpArea>
    )
}

export default InputArea