import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  flex-direction: column;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: ${(props) => (props.bgColor)};
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.h1`
  width: 200px;
  color: white;
  font-size: 42px;
  text-align: left;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const InnerProfile = styled.div`
  display: flex; 
  flex-direction: row;
`;

export const InnerUser = styled.div`
  margin-left: 10px;
`;
