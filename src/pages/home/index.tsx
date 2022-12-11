import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";

import BannerImage from '../../assets/banner.png'

import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";

const Home = () => {

    const navigate = useNavigate();
    
    const handleClickRegister = () => {
        navigate('/register')
    }
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                    <TitleHighlight>
                    Implemente
                    <br/>
                    </TitleHighlight>
                    o seu futuro Global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>

                    <Button title="Começar agora" variant="secondary" onClick={handleClickRegister}/>
                </div>
                <div>
                    <img src={BannerImage} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    );
};

export { Home };
