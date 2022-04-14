import styled from "styled-components";
import { grey } from "../../helpers/colors";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 1rem;
  padding: 2rem;
  border: 1px solid ${grey};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerRight = styled.div`
  display: flex;
  background-image: url(https://mataangin.org/_next/static/images/7-86026f48ee53cbcdc352e7f3f56e0f93.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 60%;
`;

export const FormHorizontal = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: ${({ widthContainer }) => widthContainer};
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
