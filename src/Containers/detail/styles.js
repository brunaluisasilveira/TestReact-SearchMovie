import styled from 'styled-components'
import Background from '../../assets/background1.svg'

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

    height: 85em;
    width: 40em;
    align-items: center;
    margin-top: 93px;
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


export const H2 = styled.h2`
    margin-top: 319px;
`;