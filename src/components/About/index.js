import React, { useState } from 'react';
import * as Styled from './About';
import Left from '../../images/about_left.png'
import Right from '../../images/about_right.png'
import HeAvatar from '../../images/MinhAvatar.png'
import SheAvatar from '../../images/DuyenAvatar.png'
import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'
import Instagram from '../../images/instagram.svg'
import Middle from '../../images/about_main.png'

const About = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Styled.Container id="celebrate">
      <Styled.Left src={Left} alt="left" />
      <Styled.Right src={Right} alt="right"/>
      <Styled.Wrapper>
        <Styled.HeWrapper
          className="wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <Styled.HeAvatarWrapper>
            <Styled.Avatar src={HeAvatar} alt="avatar" />
          </Styled.HeAvatarWrapper>
          <Styled.HeName>Nguyễn Thanh Minh</Styled.HeName>
          <Styled.HeDescription>Chàng trai sinh vào tháng 10, luôn luôn đam mê với những điều mang lại sự tốt đẹp cho cuộc sống. Sống hoài bão và đầy ước mơ</Styled.HeDescription>
          <Styled.SocialWrapper>
            <Styled.IconWrapper target="_blank" href="https://wwww.facebook.com/minhnt281097"> 
             <Styled.Icon src={Facebook} alt="fb" />
            </Styled.IconWrapper>
            <Styled.Icon src={Twitter} alt="tw" />
            <Styled.Icon src={Instagram} alt="ins" />
          </Styled.SocialWrapper>
        </Styled.HeWrapper>
        <Styled.MiddleWrapper
          className="wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <Styled.Middle src={Middle} alt="middle" />
        </Styled.MiddleWrapper>
        <Styled.SheWrapper
          className="wow fadeInDown"
          data-wow-duration="1s"
          data-wow-delay="0.25s"
        >
          <Styled.SheAvatarWrapper>
            <Styled.SheAvatar src={SheAvatar} alt="avatar" />
          </Styled.SheAvatarWrapper>
          <Styled.SheName>Đỗ Thị Mỹ Duyên</Styled.SheName>
          <Styled.SheDescription>Cô gái sinh vào tháng 12, thật trùng hợp là trước đám cưới 1 ngày chính là sinh nhật. Đam mê thiết kế, luôn thích sự tỉ mỉ và cẩn thận.</Styled.SheDescription>
          <Styled.SocialWrapper $reverse={true}>
            <Styled.IconWrapper target="_blank" href="https://www.facebook.com/profile.php?id=100006160780558"> 
              <Styled.Icon src={Facebook} alt="fb" />
            </Styled.IconWrapper >
            <Styled.Icon src={Twitter} alt="tw" />
            <Styled.IconWrapper target="_blank"  href="https://wwww.facebook.com/proile.php?id=1000006160780558"> 
              <Styled.Icon src={Instagram} alt="ins" />
            </Styled.IconWrapper >
          </Styled.SocialWrapper>
        </Styled.SheWrapper>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default About;
