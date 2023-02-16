import React, { useState } from 'react'
import styled from "styled-components";
import { Btn } from '../Button/ButtonArea';


const InpArea = styled.div`
    width: 60%;
    height: 20%;
    border: 1px solid green;
    padding-left: 20px;

    > label {
        text-align: center;
        padding-right :20px;
      
    }

    > input {
        padding: 0.5rem 1rem;
        border-radius: 10px; 
    }
    
    
`;





function InputArea() {
    const [inputValue, setInputValue] = useState({
        name: '',
        prcie: 0.
    })


    const onChangeNameHandelr = (e) => {
        // 초기값을 얇은복사하고 거기에 이름을 입력된걸로 바꿔라
        setInputValue({ ...inputValue, name: e.target.value })
    }







    const onFormInputBoxHandler = (event) => {
        console.log('d')
        event.preventdefault()
        console.log('d')
    }

    return (

        <form action="/">
            <InpArea>
                <h1>Input</h1><br />
                <label>이름</label> &nbsp;
                <input value={inputValue.name}
                    onChange={onChangeNameHandelr}
                />

                <label style={{ paddingLeft: '10px', }}>가격</label> &nbsp;

                <input value={inputValue.price}

                />
                <Btn
                    back={'#8EA7E9'}
                    InputBtn
                    onClick={onFormInputBoxHandler}>dd</Btn>
            </InpArea >
        </form >

    )
}

export default InputArea