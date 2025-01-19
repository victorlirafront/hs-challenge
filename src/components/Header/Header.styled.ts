import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: #0f0f11;
  width: 100%;
  color: #fff;
  padding: 20px;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 768px) {
    position: fixed;
  }

  .aside-controller {
    border-radius: 100%;
    position: absolute;
    top: 22px;
    cursor: pointer;
    border: 1px solid #fff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 30px;
      height: auto;
      transform: rotate(180deg);
      cursor: pointer;

      &.disabled {
        transform: rotate(0deg);
        margin-left: -5px;
      }
    }
  }

  .container {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    flex-direction: column;
    align-items: flex-end;

    .input-wrapper {
      ul {
        list-style: none;
        position: absolute;
        li {
          border: 1px solid #3d3d3d;
          text-decoration: none;
          padding: 10px;
          border-radius: 4px;
          cursor: pointer;
          width: 250px;
          background: #ccc;
          color: #000;
          opacity: 0.8;

          &:hover {
            background: #a8a6a6;
          }

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export const StyledSearchInput = styled.input.attrs({ type: 'search' })`
  width: 250px;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #3d3d3d;
  border-radius: 5px;
  outline: none;
  background-color: #0f0f11;
  color: #fff;
  transition: all 0.3s ease;
  display: flex;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  &:focus {
    border: 2px solid #14b04f;
    background-color: #2a2a2e;
  }

  &::placeholder {
    color: #fff;
    font-style: italic;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;
