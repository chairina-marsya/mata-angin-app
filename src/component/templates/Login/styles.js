import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url('https://mataangin.org/_next/static/images/1-8e228cbdad4884e76738ec8bd5844323.jpg');
    background-repeat: no-repeat;
    background-size: 65% 100%;
    background-position: right;
`;

export const FormDialog = styled.div`
    width: 36%;
    height: auto;
    margin-left: 2%;
    padding: 20px;
    background-color: #FFFFFF;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
`;

export const ContentWrapper = styled.div`
    width: 35%;
    margin-bottom: 1%;
`;