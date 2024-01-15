import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
    overflow: hidden;

`;

export const TextContainer = styled.div`
    margin: 10px 0px;
    padding: 30px 0;
    
`;

export const HeroImgContainer = styled.div`
    position: relative;
`;

export const HeroImg = styled.img`
    position: relative;
    top: -10px;
    overflow: hidden;
`;

export const HeroBackground = styled.img`
    position: absolute;
    object-fit: cover;
    top: -50px;
    
`;

export const HeroTitle = styled.h1`
    padding: 10px 50px;
    font-weight: bold;
    font-size: 72px;
`;

export const HeroP = styled.p`
    padding: 10px 50px;
    font-size: 24px;
`;

export const RequestInvite2 = styled.button`
    padding: 15px 50px;
    border-radius: 29px;
    border: none;
    color: #fff;
    background: -webkit-linear-gradient(left, #31d35c, #2bb7da);
    background: -moz-linear-gradient(left, #31d35c, #2bb7da);
    background: -ms-linear-gradient(left, #31d35c, #2bb7da);
    background: -o-linear-gradient(left, #31d35c, #2bb7da);
    background: linear-gradient(to right, #31d35c, #2bb7da);
    cursor: pointer;
    margin-top: 10px;
    margin-left: 50px;
`;