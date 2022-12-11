import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 55%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Wrapper = styled.div`
    flex: 1;
    width: 100%;

    input{
        color: #fff;
    }
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    width: 420px;
    margin-bottom: 40px;
    line-height: 44px;
    margin-left: 85px;
    margin-right: 141px;
    color: #fff;

    a{
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;

    &:hover{
        transition: 100ms;
        color: #e4105d;
        text-decoration: underline;
    }
    }
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`
export const SubTitleRegister = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
`

export const Column = styled.div`
    max-width: 400px;
    margin-right: 55px;
`

export const Terms = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    width: 300px;
    text-align: justify;
    color: #fff;
    margin: 27px 0 11px;
    font-family: 'Open Sans';

    span{
        color: #8647AD;
    }
`

export const JaTenhoText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #f1f1f195;
    font-family: 'Open Sans';

    a { 
        margin-left: 5px;
        color: #23DD7A;
        text-decoration: none;
    }
`