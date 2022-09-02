import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux";
import axios from 'axios';
import { Link } from "react-router-dom";


export default function MyLecture() {
  const header = useSelector((state) => state.userinfo.value.header);
  
  useEffect(() => {
    axios
    .get("https://www.dokuny.blog/members/me/courses", {
      headers: header,
    })
    .then((res) => {
      const cutLecture =  [...res.data.data.content].slice(-6)
      setMyVideo( [...cutLecture])
    })
    .catch((err) => console.log(err))
  }, [])

  const userVideo = myvideo.map((video) => {
    return (
      <Link to={`/classRoom/${video.courseId}`}>
        <LectureBox key={video.courseId}>
          <img src={video.thumbnail} alt="썸네일" style={{width:"100%", marginBottom: "4px"}}/>
          <div style={{fontSize:"14px"}}> {video.title} </div>
        </LectureBox>
      </Link>
    )
  })

  


  return (
    <LectureBody>
      클릭시 즐겨찾기 강의로 등록됩니다.
      <VideoPackage>
        { userVideo }
      </VideoPackage>
      즐겨찾기 등록한 강의
      <VideoPackage>
        
      </VideoPackage>
    </LectureBody>
  )
}


const LectureBody = styled.div`
  min-width: 505px;
  padding: 7%;
  font-size: 20px;
  font-weight: bold;

`

const VideoPackage = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 540px;
  flex-wrap: wrap;
  margin: 4px 0 4px 0;

`


const LectureBox = styled.div`
  width: 160px;
  margin: 0 16px 16px 0;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    border-radius: 5px;
    border-color: #ccff66;
    box-shadow: 0 0 10px #ccff66, inset 0 0 0 1px #000, inset 0 0 0 2px #ccff66;
    color: #ccff66;
  }

  &:active {
    transform: scale(1.2);
  }

`