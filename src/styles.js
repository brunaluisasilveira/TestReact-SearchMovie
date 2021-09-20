import styled from 'styled-components'
import Background from './assets/background1.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 40px;

    height: 90em;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%, 
        rgba(255, 255, 255, 0.6) 0.85%, 
        rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;

    padding: 50px 36px;
    flex-direction: column;
    display: flex;

    height: 90em;
    width: 40em;
    align-items: center;
`;

export const H1 = styled.h1`
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;

    text-align: center;
    padding-bottom: 50px;
    align-content: center;

    color: #FFFFFF;
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 22px;
    letter-spacing: -0.408px;

    color: #EEEEEE;
    
    margin-top: 100px;
    margin-bottom: 30px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    margin-bottom: 34px;
    padding-left: 25px;
    width: 500px;
    height: 58px;

    border: none;
    outline: none;
   
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    color: #FFFFFF;

    width: 500px;
    height: 60px;

`;

export const Button = styled.button`
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    
    width: 500px;
    height: 60px;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    color: #FFFFFF;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const H2 = styled.h2`
    margin-top: 213px;
`;



