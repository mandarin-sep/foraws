import React from "react";
import styled from "styled-components";
import Pie from "../components/Pie";
import HomeLecture from "./HomeLecture";
export default function HomeCategory() {
  return (
    <MainArea>
      <StarBackground>
        <Effect />
        <BrownBox>
          <RedBox>
            <PieBox>
              <Pie />
            </PieBox>
            <GridBox>
              <GreenBox href="https://star.cono.kr/" target="_blank">
                스타 전적검색
              </GreenBox>
              <GreenBox href="http://eloboard.com/univ/" target="_blank">
                스타 대학 전적
              </GreenBox>
              <GreenBox
                href="http://eloboard.com/men/bbs/board.php?bo_table=rally"
                target="_blank"
              >
                스타 대회 정보
              </GreenBox>
              <GreenBox
                href="http://eloboard.com/men/bbs/board.php?bo_table=Schedule"
                target="_blank"
              >
                스타 대회 일정
              </GreenBox>
            </GridBox>
            <GridBigBox className="big">
              <GreenBigBox>
                <span>스타 리마스터 주요특징</span>
                <div>그래픽 리마스터</div>
                <div>음성 및 음향 개선</div>
                <div>
                  블리자드 친구 및 <br />
                  상대 찾기
                </div>
                <div>
                  클래식 스타크래프트
                  <br />
                  게임 플레이
                </div>
              </GreenBigBox>
            </GridBigBox>
          </RedBox>
        </BrownBox>
      </StarBackground>
      <HomeLecture />
    </MainArea>
  );
}

const MainArea = styled.div``;

const StarBackground = styled.div`
  width: 100%;
  padding: 50px 0;
  background-image: url("https://static.starcraft.com/production/images/site/backdrops/backdrop-stars.890c5929ec65159852db3a0fab438e7aaa5c210f.jpg");
`;
const Effect = styled.div`
  width: 593px;
  height: 53px;
  margin: 0 auto;
  background-image: url("https://static.starcraft.com/production/images/site/dividers/divider-terminal-detail.3a193b6d6e3a7d62cee253b2a245bbdd73bea9b6.png");
  @media screen and (max-width: 662px) {
    width: 300px;
  }
  @media screen and (max-width: 300px) {
    display: none;
  }
`;
const BrownBox = styled.div`
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  width: 70%;
  padding: 3px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 2px solid #331f1f;
  border-radius: 6px;
  margin: 0 auto;
`;
const RedBox = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  border: 1px solid #800000;
  padding: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const PieBox = styled.div`
  flex-basis: 40%;
  height: 300px;
`;

const GridBox = styled.div`
  flex-basis: 20%;
  height: 300px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GridBigBox = styled.div`
  flex-basis: 30%;
  height: 300px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GreenBox = styled.a`
  border: 1px solid rgba(0, 204, 0, 0.6);
  box-shadow: 0 0 20px rgb(0 204 0 / 50%), inset 0 0 0 1px #000,
    inset 0 0 0 2px rgb(0 204 0 / 50%);
  color: #80ff66;
  height: 60px;
  line-height: 60px;

  &:hover {
    border-color: #ccff66;
    box-shadow: 0 0 10px #ccff66, inset 0 0 0 1px #000, inset 0 0 0 2px #ccff66;
    color: #ccff66;
  }
`;

const GreenBigBox = styled.div`
  border: 1px solid rgba(0, 204, 0, 0.6);
  box-shadow: 0 0 20px rgb(0 204 0 / 50%), inset 0 0 0 1px #000,
    inset 0 0 0 2px rgb(0 204 0 / 50%);
  height: 300px;
  display: grid;
  padding: 10px;
  span {
    margin-top: 20px;
    color: #80ff66;
  }

  div {
    color: #b8bbcc;
  }
  &:hover {
    border-color: #ccff66;
    box-shadow: 0 0 10px #ccff66, inset 0 0 0 1px #000, inset 0 0 0 2px #ccff66;
  }
`;
