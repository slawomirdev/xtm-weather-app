import styled from "styled-components";

export const CurrentWeather = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  font-weight: bold;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    margin: 1rem 0.2rem;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 1rem 0.2rem;
  }

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

   @media only screen and (max-width: 1000px) {
    margin: 1.3rem 0.2rem;
  }

  div {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 600px) {
      margin: 0.3rem;
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

  @media only screen and (max-width: 600px) {
    height: 5rem;
    width: 6.2rem;
  }

  @media only screen and (max-width: 350px) {
    height: 4rem;
    width: 4.8rem;
  }

  @media only screen and (max-width: 250px) {
    height: 3rem;
    width: 3.8rem;
  }
  p {
    font-weight: normal;
    font-size: 0.8rem;
    margin: 0.2rem;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 0.7rem;
    }
  }

  span {
    font-weight: bold;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;
