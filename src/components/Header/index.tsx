import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
} from "./styles";
import { IHeader } from "./types";

const Header = ({autenticado}: IHeader) => {
    
    const navigate = useNavigate();

    const handleHomeNavigate = () => {
        navigate("/");
    }

    const handleLoginNavigate = () => {
        navigate("/login");
    }

    const handleRegisterNavigate = () => {
        navigate("/register");
    }


    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo DIO" onClick={handleHomeNavigate}/>
                    {autenticado ? (
                        <> 
                            <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" />
                    ) : (
                        <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={handleLoginNavigate} />
                        <Button title="Cadastrar" onClick={handleRegisterNavigate} variant="primary"/>
                        </>

                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
