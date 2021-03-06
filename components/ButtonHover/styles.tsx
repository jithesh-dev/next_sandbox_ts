import css from "styled-jsx/css";

const styles = css`
  a {
    position: relative;
    display: inline-block;
    width: 160px;
    height: 50px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: auto;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #6c4ba5;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  span:nth-child(2) {
    color: #6c4ba5;
    background: #fff;
    overflow: hidden;
    z-index: 2;
    transition: 0.5s;
    clip-path: polygon(60% 0, 100% 0%, 100% 100%, 60% 100%, 40% 53%);
  }
  span:nth-child(2):hover {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 0 50%);
  }
  span:nth-child(1):hover ~ span:nth-child(2) {
    clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%);
  }
`;

export default styles;
