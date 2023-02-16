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
        padding: .5rem 1rem;
        border-radius: 10px; 
    }
    
`;





function InputArea() {
    const [inputValue, setInputValue] = useState({
        name: '',
        price: 0,
    })


    const onChangeNameHandelr = (e) => {
        // 초기값을 얇은복사하고 거기에 이름을 입력된걸로 바꿔라
        setInputValue({ ...inputValue, name: e.target.value })
    }
    const onChabgePriceHandler = (e) => {
        const value = e.target.value;
        const removedCommaValue = Number(value.replaceAll(',', ''));

        setInputValue({ ...inputValue, price: removedCommaValue.toLocaleString() });
    };






    const onFormInputBoxHandler = (e) => {
  
        e.preventDefault();
        alert(`{name: ${inputValue.name}, price: ${inputValue.price}}`);
    };

    return (

        <form onSubmit={onFormInputBoxHandler}>
            <InpArea>
                <h1>Input</h1><br />
                <label>이름</label> &nbsp;
                <input

                    value={inputValue.name}
                    onChange={onChangeNameHandelr}
                />

                <label style={{ paddingLeft: '10px', }}>가격</label> &nbsp;

                <input

                    value={inputValue.price}
                    onChange={onChabgePriceHandler}

                />
                <Btn
                    back={'#8EA7E9'}
                    InputBtn
                >dd</Btn>
            </InpArea >
        </form >

    )
}

export default InputArea