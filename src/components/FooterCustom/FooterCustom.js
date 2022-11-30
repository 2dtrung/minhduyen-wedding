import styled from 'styled-components';
import Border from '../../images/border.png'

export const Container = styled.div`
  width: 100%;
  background-color: #cde0ef;;
`;

export const MainContent = styled.div`
  padding: 20px 4px;

  @media screen and (min-width: 768px) {
    padding: 28px 8px;
  }

  @media screen and (min-width: 1200px) {
    padding: 18px 14px;
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  border: 1px solid #86A0B6;
  padding: 4px 0px;

  @media screen and (min-width: 768px) {
    padding: 56px 54px 12px 44px;
  }

  @media screen and (min-width: 1200px) {
    padding: 32px 22px;
    display: flex;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    width: 70%;
  }
`;

export const SocialWrapper = styled.div`
  padding: 20px 20px 0;

  @media screen and (min-width: 768px) {
    width: 60%;
    padding: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const AddressWrapper = styled.div`
  padding: 26px 20px 20px;

  @media screen and (min-width: 768px) {
    width: 40%;
    padding: 0;
    margin-top: 50px;
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
    margin-top: 0px;
  }
`;

export const PictureWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: 30%;
    margin-top: 0px;
    max-width: 410px;
  }
`;

export const PictureHeading = styled.div`
  @media screen and (min-width: 768px) {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #002642;
  }
`;

export const PictureList = styled.div`
  @media screen and (min-width: 768px) {
    margin-top: 14px;
    display: grid;
    column-gap: 18px;
    row-gap: 12px;
    grid-template-columns: repeat(4, minmax(0,1fr));
  }

  @media screen and (min-width: 768px) {
    column-gap: 12px;
  }
`;

export const Picture = styled.img`
  @media screen and (min-width: 768px) {
    width: 152px;
    height: 104px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100px;
  }
`;



export const Heading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #002642;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const ContactWrapper = styled.div`
  margin-top: 6px;

  @media screen and (min-width: 1200px) {
    margin-top: 16px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 4px;
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

export const ContactIcon = styled.img`
  width: 18px;
  height: 14px;
  margin-right: 6px;

  @media screen and (min-width: 1200px) {
    height: 18px;
    margin-right: 10px;
  }
`;

export const ContactText = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #5880A2;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const Bottom = styled.div`
  background: #86A0B6;
  height: 64px;
`;

export const BottomWrapper = styled.div`
  padding: 22px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomText = styled.div`
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  margin-right: 4px;

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

export const BottomIcon= styled.img`
  width: 20px;
  height: 16px;
`;



export const Logo = styled.img`
  width: 90px;
  height: 90px;

  @media screen and (min-width: 1200px) {
    width: 74px;
    height: 74px;
  }
`;

export const Description = styled.div`   
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  color: #525252;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    max-width: 214px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
    margin-top: 16px;
    max-width: 254px;
  }
`;

export const Social= styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;

  @media screen and (min-width: 1200px) {
    margin-top: 18px;
  }
`;

export const IconWrapper = styled.a`
  width: 32px;
  height: 22px;
  margin-right: 10px;

  @media screen and (min-width: 1200px) {
    height: 32px;
    margin-right: 20px;
  }
`;

export const Icon= styled.img`
  width: 32px;
  height: 22px;
  margin-right: 10px;

  @media screen and (min-width: 1200px) {
    height: 32px;
    margin-right: 20px;
  }
`;

export const Text = styled.div`
  margin-top: 5px;
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #000000;
`;

export const DecorationLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 40px;
`;

export const InformationWrapper = styled.div`
  margin-top: 24px;
`;

export const InformationItem = styled.div`
  background: url(${Border}) center center/cover no-repeat;
  position: relative;
  width: 328px;
  height: 300px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 42px;
  left: 26px;
  padding: 30px 24px;
  background: #EDF3F8;
  width: 276px;
  height: 208px;
`;

export const Title = styled.div`
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  text-align: center;
  color: #000000;
`;

export const Time = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #848892;
`;

export const Address = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #848892;
`;

export const Phone = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #848892;
`;

export const MapWrapper= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

export const Map = styled.a`
  margin: 0 auto;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  text-decoration-line: underline;
  color: #8FACC2;
`;
