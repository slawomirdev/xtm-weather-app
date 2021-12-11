import styled from "styled-components";

export const CurrentWeather = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  border-left: 1px solid #340a13;
  font-weight: bold;
  flex-direction: column;

  p {
    font-size: 1.8rem;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;

  div {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

type BoxProps = {
  color?: string;
  text?: string;
};

export const Box = styled.div`
  height: 5.3rem;
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${(props: BoxProps) =>
    props.color ? props.color : "#fff"};
  color: ${(props: BoxProps) => (props.text ? props.text : "black")};
  p {
    font-weight: normal;
    font-size: 0.8rem;
    margin: 0.2rem;
    text-align: center;
  }

  span {
    font-weight: bold;
    text-align: center;
  }
`;
