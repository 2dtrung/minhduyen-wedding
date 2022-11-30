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
        <Styled.Title>Save The Date</Styled.Title>
        <Styled.Description>Chúng mình sẽ cưới nhau vào ngày “3/12/2022”</Styled.Description>
        <Styled.Timer>
          <Styled.Month>
            <Styled.Number>{moment("20221203", "YYYYMMDD").diff(moment(), 'months')}</Styled.Number>
            <Styled.Time>Tháng</Styled.Time>
          </Styled.Month>
          <Styled.Month>
            <Styled.Number>
            <Countdown 
                date={moment("20221203", "YYYYMMDD")}
                renderer={({days}) => {
                  return days;
                }}
              />
            </Styled.Number>
            <Styled.Time>Ngày</Styled.Time>
          </Styled.Month>
          <Styled.Month>
            <Styled.Number>
            <Countdown 
                date={moment("20221203", "YYYYMMDD")}
                renderer={({hours}) => {
                  return hours;
                }}
              />
            </Styled.Number>
            <Styled.Time>Giờ</Styled.Time>
          </Styled.Month>
          <Styled.Month>
            <Styled.Number>
            <Countdown 
                date={moment("20221203", "YYYYMMDD")}
                renderer={({minutes}) => {
                  return minutes;
                }}
              />
            </Styled.Number>
            <Styled.Time>Phút</Styled.Time>
          </Styled.Month>
          <Styled.Month>
            <Styled.Number>
              <Countdown 
                date={moment("20221203", "YYYYMMDD")}
                renderer={({seconds}) => {
                  return seconds;
                }}
              />
            </Styled.Number>
            <Styled.Time>Giây</Styled.Time>
          </Styled.Month>
        </Styled.Timer>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
