import React from "react";
import styled from "styled-components";

const Thing = styled.div.attrs((props) => ({}))`
  font-size: 30px;
  text-align: center;

  transition: transform 0.2s linear;

  .facebook {
    color: #4267b2;
  }

  .react {
    color: #61dbfb;
  }

  .vk {
    color: #4c75a3;
  }

  .twitter {
    color: #1da1f2;
  }

  .instagram {
    color: #c13584;
  }

  .youtube {
    color: #ff0000;
  }

  .github {
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    transform: scale(1.1);
  }
`;

function SocialItem(props) {
  return (
    <Thing>
      <a
        href={`https://${props.value}`}
        className={props.classTag}
        target={"_blank"}
        rel="noreferrer"
      >
        <i className={`fa-brands fa-${props.classTag}`}></i>
      </a>
    </Thing>
  );
}

export default SocialItem;
