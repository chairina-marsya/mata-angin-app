import styled from "styled-components";
import { blue } from "../../../helpers/colors";

export const Container = styled.div`
  display: flex;
  background-color: ${blue};
  height: 100%;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

export const ContainerRight = styled.div`
  display: flex;
  background-size: cover;
  width: 70%;
  padding: 4rem 4rem 4rem 0rem;
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
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 50px 0px 0px 50px;
`;

export const ContainerBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: #fff;
  border-radius: 50px;
`;
