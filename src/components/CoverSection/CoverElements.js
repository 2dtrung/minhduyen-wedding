import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import BackgroundImageMobile from '../../images/bg-intro-mobile.png'
import BackgroundImageTablet from '../../images/bg-intro-tablet.png'
import BackgroundImageDesktop from '../../images/bg-intro-desktop.png'
import BackgroundTimer from '../../images/bg-timer.png'
import BackgroundTimerTablet from '../../images/bg-timer-tablet.png'

export const CoverContainer = styled.div`
  background: url(${BackgroundImageMobile}) center center/cover no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundImageTablet});
  }

  @media screen and (min-width: 1200px) {
    background-image: url(${BackgroundImageDesktop});
  }
`;

export const CoverContent = styled.div`
  height: 614px;
  padding: 304px 16px 120px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    padding: 324px 20px 102px;
  }

  @media screen and (min-width: 1200px) {
    height: 986px;
    max-width: 1164px;
    margin: 0 auto;
    padding: 460px 18px 134px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  text-align: center;
  color: #FFFFFF;
  height: 70px;
  text-shadow: 1px 1px 1px #000000;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    height: 90px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 100px;
    height: 140px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 1px 1px 1px #000000;

  @media screen and (min-width: 768px) {
    margin-top: 4px;
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 20px;
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const Timer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 94px;
  }

  @media screen and (min-width: 1200px) {
    height: 200px;
  }
`;

export const Month = styled.div`
  background: url(${BackgroundTimer}) center/contain no-repeat;
  width: 100px;
  height: 82px;
  &:not(:last-child) {
    margin-right: 12px;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${BackgroundTimerTablet});
    width: 124px;
    height: 94px;
  }

  @media screen and (min-width: 1200px) {
    width: 204px;
    height: 200px;
    &:not(:last-child) {
    margin-right: 24px;
    }
  }
`;

export const Number = styled.div`
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  color: #000000;
  text-align: center;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    font-weight: 900;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 50px;
    margin-left: 8px;
    font-size: 40px;
  }
`;

export const Time = styled.div`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 6px;
  color: #000000;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    margin-left: 8px;
  }
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;



export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const CoverH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CoverP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CoverBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
