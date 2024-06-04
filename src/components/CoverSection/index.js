import React, { useState } from 'react';
import moment from "moment";
import Countdown from 'react-countdown';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { Button } from '../ButtonElements';


import * as Styled from './CoverElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer id="home">
      {/* <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg> */}
      <CoverContent>
        <Styled.Title
          className="wow bounceIn"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          Save The Date
        </Styled.Title>
        <Styled.Description
          className="wow bounceIn"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          Chúng mình sẽ về chung nhà vào ngày “4/12/2022”
        </Styled.Description>
        <Styled.Timer>
          <Styled.Month
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.15s"
          >
            <Styled.Number>0</Styled.Number>
            <Styled.Time>Tháng</Styled.Time>
          </Styled.Month>
          <Styled.Month
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.25s"
          >
            <Styled.Number>
            0
            </Styled.Number>
            <Styled.Time>Ngày</Styled.Time>
          </Styled.Month>
          <Styled.Month
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <Styled.Number>
            0
            </Styled.Number>
            <Styled.Time>Giờ</Styled.Time>
          </Styled.Month>
          <Styled.Month
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.45s"
          >
            <Styled.Number>
            0
            </Styled.Number>
            <Styled.Time>Phút</Styled.Time>
          </Styled.Month>
          <Styled.Month
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.55s"
          >
            <Styled.Number>
              0
            </Styled.Number>
            <Styled.Time>Giây</Styled.Time>
          </Styled.Month>
        </Styled.Timer>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
