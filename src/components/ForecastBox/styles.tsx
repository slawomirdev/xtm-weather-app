import styled from "styled-components";

export const ForecastContainer = styled.div`
  display: flex;
  background-color: #3c384b;
  border-radius: 15px;
  height: 15rem;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow-y: hidden;

  @media only screen and (max-width: 1000px) {
    width: 95%;
    margin: 1rem 1rem;
    padding: 0 1rem;
    border: none;
    overflow-x: auto;
    border-radius: 5px;
    justify-content: start;
  }

  @media only screen and (max-width: 800px) {
    width: 95%;
    margin: 1rem 0;
  }
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  @media only screen and (max-width: 1000px) {
    margin: 0rem 0.7rem;
  }
`;
