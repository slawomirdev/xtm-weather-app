import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;

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
    margin: 1rem 0rem;
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