import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
                </Column>
                <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={15} nome={"Bartholomeu Alves"} image="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
                <UserInfo percentual={80} nome={"Bartholomeu Alves"} image="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
                <UserInfo percentual={100} nome={"Bartholomeu Alves"} image="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
                <UserInfo percentual={32} nome={"Bartholomeu Alves"} image="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
                <UserInfo percentual={40} nome={"Bartholomeu Alves"} image="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
                </Column>
            </Container>
        </>
    );
};

export { Feed };
