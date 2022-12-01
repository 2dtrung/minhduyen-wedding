import styled from 'styled-components';
import Border from '../../images/border.png'

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 24px 16px;

  @media screen and (min-width: 768px) {
    padding: 0 46px 90px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 18px 120px;
  }
`;

export const DecorationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Decoration = styled.img`
`;

export const DecorationLine = styled.img`
  @media screen and (min-width: 1200px) {
    width: 346px;
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

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 46px;
  }
`;

export const DecorationLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const InformationWrapper = styled.div`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: flex-start;
    margin-top: 0px;
  }
`;

export const InformationItem = styled.div`
  background: url(${Border}) center center/cover no-repeat;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 328px;
  height: 300px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    &:first-child {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 30px;
    }
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

  @media screen and (min-width: 1200px) {
    padding: 16px;
  }
`;

export const Title = styled.div`
  font-family: 'Donalia';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 1200px) {
    font-size: 34px;
  }
`;

export const Time = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #848892;

  @media screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;

export const Address = styled.div`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #848892;

  @media screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;

export const Phone = styled.div`
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;

  @media screen and (min-width: 1200px) {
    font-size: 13px;
  }
`;

export const MapWrapper= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8px;

  @media screen and (min-width: 1200px) {
    margin-top: 16px;
  }
`;

export const Map = styled.a`
  margin: 0 auto;
  font-family: 'Josefin sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  text-decoration-line: underline;
  color: #8FACC2;
`;
