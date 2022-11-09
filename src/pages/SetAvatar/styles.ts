import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;

  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }

  .title-container {
    h1 {
      color: #fff;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
    }
    img {
      height: 6rem;
    }

    .selected {
      border: 0.4rem solid ${(props) => props.theme["4e0eff"]};
    }
  }
`;
