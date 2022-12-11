import {Button} from "../../components/Button"
import Input from "../../components/Input/index"
import { Header } from "../../components/Header"

import { Column, Container, FormWrapper, JaTenhoText, Terms, Title, TitleRegister, SubTitleRegister, Wrapper, } from "./styles"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"

import { IFormData } from "./types"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"

import { MdEmail, MdLock, MdVerifiedUser } from "react-icons/md";


const schema = yup
    .object({
    fullName: yup
        .string().min(3).max(40)
        .required('Campo obrigatório'),
    email: yup
        .string()
        .email()
        .required('Campo obrigatório'),
    password: yup
        .string()
        .min(3)
        .required('Campo Obrigatório'),
  })
  .required();


  export const Register = () => {
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	const onSubmit = async (formData: IFormData) => {
		try {
			const { data } = await api.post(
				`users?name=${formData.fullName}&email=${formData.email}&senha=${formData.password}`
			);

			if (data.length === 1) {
				navigate('/login');
			} else {
				alert(
					"Dados inválidos. Por favor, verifique e tente novamente"
				);
			}
		} catch {
			alert("Puts, falha nossa! Por favor, tente novamente.");
		}
	};
    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas    mais desejadas.
                <br />
                <a href="/login">Voltar para Login</a>
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegister>
                        Comece agora grátis
                    </TitleRegister>
                    <SubTitleRegister>
                        Crie sua conta e make the change._
                    </SubTitleRegister>
                    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                    <form >
                            <Input name="fullName"
                             errorMessage={errors?.fullName?.message} 
                             control={control} 
                             placeholder="Nome Completo" leftIcon={<MdVerifiedUser/>}/>
                            <Input name="email" 
                            errorMessage={errors?.email?.message} 
                            control={control} 
                            placeholder="Seu melhor @e-mail" leftIcon={<MdEmail />}/>
                            <Input name="password" 
                            errorMessage={errors?.password?.message} 
                            control={control} 
                            placeholder="Senha" 
                            type="password" leftIcon={<MdLock />}/>
                    <Button title="Criar minha conta agora" variant="secondary" type="submit" />
                    </form> 
                    </FormWrapper>
                    <Terms>
							Ao clicar em "criar minha conta grátis", declaro que
							aceito as <span>Políticas de Privacidade</span> e os <span>Termos de
							Uso</span> da DIO.
					</Terms>
                    <JaTenhoText>
							Já tenho conta.
							<a href="/login"> Fazer login</a>
					</JaTenhoText>
                </Wrapper>
            </Column>
        </Container>
    </>
  )
}
