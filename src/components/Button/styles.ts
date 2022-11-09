import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.theme["997af0"]};
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme["4e0eff"]};
  }
`;
