import React, { useState } from 'react';
import * as Styled from './FooterCustom';
import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'
import Instagram from '../../images/instagram.svg'
import Youtube from '../../images/youtube.svg'
import FooterLogo from '../../images/minhduyen-footer.png'
import Heart from '../../images/heart.svg'
import { CONTACT_LIST, PICTURE_LIST } from './utils';

const FooterCustom = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Styled.Container id="footer">
      <Styled.MainContent>
        <Styled.Content>
          <Styled.Wrapper>
          <Styled.SocialWrapper>
            <Styled.Logo src={FooterLogo} alt="footer-logo" />
            <Styled.Description>Gửi lời chào thân thương và chúng mình hy vọng mọi người sẽ đến chung vui với chúng mình!</Styled.Description>
            <Styled.Social>
            <Styled.IconWrapper target="_blank" href="https://www.facebook.com/2dtrung/">
              <Styled.Icon src={Facebook} alt="facebook" />
            </Styled.IconWrapper>
            <Styled.IconWrapper target="_blank" href="https://www.instagram.com/__gnurt/">
            <Styled.Icon src={Twitter} alt="twitter" />
            </Styled.IconWrapper>
              <Styled.IconWrapper target="_blank" href="https://twitter.com/2dtrung">
                <Styled.Icon src={Instagram} alt="instagram" />
              </Styled.IconWrapper>
              <Styled.Icon src={Youtube} alt="youtube" />
            </Styled.Social>
          </Styled.SocialWrapper>
          <Styled.AddressWrapper>
            <Styled.Heading>ĐỊA CHỈ</Styled.Heading>
            <Styled.Description>Nếu bạn có bất cứ thắc mắc gì, hãy cứ liên hệ chúng mình nhé </Styled.Description>
            <Styled.ContactWrapper>
            {CONTACT_LIST.map(({icon, text}) => (
              <Styled.ContactItem key={text}>
                <Styled.ContactIcon src={icon} alt={text}/>
                <Styled.ContactText>{text}</Styled.ContactText>
              </Styled.ContactItem>
            ))}
            </Styled.ContactWrapper>
          </Styled.AddressWrapper>
          </Styled.Wrapper>
          <Styled.PictureWrapper>
            <Styled.PictureHeading>HÌNH CƯỚI</Styled.PictureHeading>
            <Styled.PictureList>
              {PICTURE_LIST.map(({image, alt}) => (
                <Styled.Picture src={image} alt={alt} />
              ))}
            </Styled.PictureList>
          </Styled.PictureWrapper>
        </Styled.Content>
      </Styled.MainContent>
      <Styled.Bottom>
          <Styled.BottomWrapper>
            <Styled.BottomText>Tiuh | From em trai with</Styled.BottomText>
            <Styled.BottomIcon src={Heart} alt="bottom-icon" />
          </Styled.BottomWrapper>
      </Styled.Bottom>
    </Styled.Container>
  );
};

export default FooterCustom;
