import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

import { 
    CardContainer,
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
    } from './styles'


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://i.imgur.com/rtCRRmx.png" alt="Imagem do Post"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"/>
                <div>
                    <h4>Bartholomeu Alves</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Título do Post</h4>
                <p>Descritivo do post como placeholder só para praticar ReactJS com ... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <FiThumbsUp /> 10
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }