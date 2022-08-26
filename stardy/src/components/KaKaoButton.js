import axios from "axios";
import React from "react";
import styled from "styled-components";
import kakaoimg from "../images/kakao.png";

export default function KaKaoButton() {
  return (
    <KaKaoWrap>
      <KaKaoBtn href="https://stardy.ga/oauth2/authorization/kakao?redirect_uri=http://stardy.cf">
        <Img src={kakaoimg} alt="kakao-login" />
      </KaKaoBtn>
    </KaKaoWrap>
  );
}

const KaKaoWrap = styled.div`
  width: 100%;
`;
const KaKaoBtn = styled.a``;
const Img = styled.img``;
