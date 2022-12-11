import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({ variant }) => variant !== "primary" && css`
            min-width: 167px;
            height: 42px;
            font-size: 12px;

            background: #e4105d;

            &:hover{
                opacity: 0.6;
                cursor: pointer;
                color: #1e192c;
            }

            &::after {
                content: '';
                position: absolute;
                border: 1px solid #e4105d;
                top: -8px;
                left: -9px;
                width: calc(100% + 1rem);
                height: calc(100% + 1rem);
                border-radius: 30px;
            }
        `};

        ${({ variant }) => variant == "primary" && css`
            cursor: pointer;

            &:hover{
                opacity: 0.6;
                cursor: pointer;
                color: #1e192c;
                background: #e4105d;
                transition: 250ms;
            }
        `};
`;
