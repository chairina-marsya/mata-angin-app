import styled from "styled-components";
import PaymentImage from '../../../assets/payment.png';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-image: url(${PaymentImage});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    align-items: flex-end;
`;

export const FormDialog = styled.div`
    width: 33%;
    height: auto;
    margin-right: 2%;
    padding: 20px;
    background-color: #FFFFFF;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
`;

export const ContentWrapper = styled.div`
    width: 35%;
    margin-bottom: 1%;
`;