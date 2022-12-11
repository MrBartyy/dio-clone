import { type } from "os";

export interface IButton {
  title: string;
  variant?: string;
  onClick?: () => void;
  type?: string;
}

export interface IButtonStyled {
    variant: string;
}