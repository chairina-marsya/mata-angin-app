import styled from "styled-components";
import { blue, white } from "../../../helpers/colors";

export const Container = styled.div`
  display: flex;
  background-color: ${blue};
  width: 100vw;
  height: 100vh;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: ${white};
`;

export const ContainerWrapper = styled.div`
  display: flex;
  background-size: cover;
`;

export const FormHorizontal = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => (dir === "col" ? "column" : "row")};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: ${({ widthContainer }) => widthContainer};
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const ContainerFile = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 50px;
  padding: 4rem;
  justify-content: center;
  border: 1px solid gray;
  width: 80%;
  height: 70%;
`;

export const ContainerBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  border-radius: 50px;
`;
