import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1b1c29;
  color: #fff;
  overflow-y: auto;

  @media only screen and (max-width: 1000px) {
    height: 100%;
  }

  h1 {
    margin: 0.6rem;
  }

  select {
    width: 13rem;
    font-size: 1.3rem;
    border: 2px solid black;
    padding: 0.2rem;
  }
  select:hover {
    background-color: #f7ec9e;
  }

  label {
    font-size: 1.5rem;
    margin: 0.3rem 0rem;
  }
`;

export const ForecastContainer = styled.div`
  display: flex;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;
