import styled from "styled-components";
import backgroundImageMobile from '../../../../images/bg-intro-mobile.svg'
import backgroundImageDesktop from '../../../../images/bg-intro-desktop.svg'

export const HeroBg = styled.div`
    width: 100%;
    height: 60vw;
    max-height: 900px;
    z-index: -1;
    background-position: 0% 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-image: url(${backgroundImageMobile});
    background-size: cover;
    background-repeat: no-repeat;

    @media (min-width: 1024px) {
        background-image: url(${backgroundImageDesktop});
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: 1200px;
        background-position: 0 80%;
        margin-top: -150px;
        width: 900px;
        height: 900px;
    }
`;

export const HeroImg = styled.img`
    min-height: 10vw;
    position: absolute;
    top: -30vw;
    height: 90vw;
    max-height: 90vw;

    @media (min-width: 1024px) {
        width: 600px;
        height: auto;
        right: 0;
        top: -20px;
        max-height: 80vw;
    }
`;

export const HeroContainer = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        padding: 0 0 0 6%;
    }

    @media (min-width: 1280px) {
        /* padding: 0 6% 0 6%; */
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 50px;
    padding: 40px 10%;
    justify-content: center;
    max-width: 600px;

    @media (min-width: 1024px) {
        max-width: 400px;
        align-items: start;
        text-align: left;
        padding: 0;
        margin: 0;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 32px;
    text-align: center;
    font-weight: 500;

    @media (min-width: 1024px) {
        font-size: 48px;
        text-align: start;
    }
`;

export const HeroP = styled.p`
    font-size: 0.825rem;
    color: hsl(233, 8%, 62%);
    line-height: 1.5rem;

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

export const HeroButton = styled.button`
    min-width: 200px;
    padding: 12px 54px;
    border-radius: 32px;
    outline: none;
    border: none;
    background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    transition-timing-function: linear;
    transition: 0.5s;
    text-align: center;


    &:hover {
        opacity: 0.8;
    }
`;