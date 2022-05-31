import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import {useNavigate,Link} from 'react-router-dom';
import styled from "styled-components";


function Search() { 
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => { 
        e.preventDefault();
        navigate('/searched/' + input);

    }
    return (
        <FormStyle onSubmit={submitHandler}>
            <FaSearch/>
            <input onChange={(e) => { setInput(e.target.value) }} type='text' value={input}></input>
        </FormStyle>);
}

const FormStyle = styled.form`
margin:0% auto;
width:100%;
position:relative;
input
{ 
    border:none;
    font-size:1rem;
    color:white;
    background:linear-gradient(to right, #494949,#313131);
    padding:1rem 3rem;
    border-radius:1rem;
    outline:none;
    width:100%;
}
svg
{
    position:absolute;
    color:white;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);
}
`;
export default Search;