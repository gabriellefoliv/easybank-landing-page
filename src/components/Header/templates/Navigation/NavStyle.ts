import styled from "styled-components";

export const Overlay = styled.div`
    &.active {
        position: absolute;
        top: 52px;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: rgba(0,0,0);
        background: linear-gradient(180deg, hsl(233, 26%, 24%) 0%, transparent 100%);
        transition: 1s;
    }
`;

export const NavContainer = styled.nav`
    background-color: #fff;
    padding: 16px 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 50;

    @media (min-width: 1024px) {
        .hamburguer {
            display: none;
        }

        .headerButton {
            display: flex;
        }
    }

`;

export const LogoImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Ul = styled.ul`
    padding: 30px 0;
    margin: 0;
    border-radius: 5px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background-color: #fff;
    width: 80vw;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);

    &.active {
        display: flex;
    }

    @media (min-width: 1024px) {
        width: auto;
        padding: 0;
        position: static;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        gap: 24px;
        transform: none;


    }
`;

export const Li = styled.li`
    text-align: center;
    color: hsl(233, 26%, 24%);
    cursor: pointer;
    font-size: 18px;

    @media (min-width: 1024px) {
        font-size: 16px;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -28px;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
            display: block;
            opacity: 0;
            transition: 0.5s;

        &:hover::after{
            opacity: 1;
        }
        }
    }
`

export const Menu = styled.img`
    z-index: 5;
    width: 24px;
    cursor: pointer;

    &.close {
        width: 20px;
        height: 20px;
    }
`;

export const Button = styled.button`
    min-width: 200px;
    padding: 12px 54px;
    border-radius: 32px;
    outline: none;
    border: none;
    background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    display: none;
    transition-timing-function: linear;
    transition: 0.5s;
    text-align: center;


    &:hover {
        opacity: 0.8;
    }

   

`;