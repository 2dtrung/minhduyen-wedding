import React, { useState } from 'react';
import * as Styled from './ConfirmForm.styled';
import Decoration from '../../images/decoration.svg'
import DecorationLine from '../../images/decoration-line.svg'
import FormLeft from '../../images/form-left.png'
import FormRight from '../../images/form-right.png'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const ConfirmForm = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const handleOnClick = () => {
    console.log("Herre");
    NotificationManager.success('Cảm ơn bạn đã để lại thông tin cho chúng mình', 'Thành công!');
  }

  return (
    <Styled.Container id="form">
      <Styled.Wrapper>
        <Styled.Left 
         src={FormLeft} 
         alt="left" 
         className="wow fadeInLeft"
         data-wow-duration="1s"
         data-wow-delay="0.25s"
        />
        <Styled.BlueBackground>
          <Styled.WhiteBackground>
          <Styled.ContentWrapper>
            <Styled.DecorationWrapper>
              <Styled.Decoration src={Decoration} alt="decoration" />
            </Styled.DecorationWrapper>
            <Styled.Text
              className="wow bounceIn"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              Are You Attending?
            </Styled.Text>
            <Styled.DecorationLineWrapper>
              <Styled.DecorationLine src={DecorationLine} alt="decoration-line" />
            </Styled.DecorationLineWrapper>
            <form method='post'>
              <Styled.Input type="text" name="name" placeholder="Tên của bạn" />
              <Styled.Input type="text" name="phone"  placeholder="Số điện thoại" />
              <Styled.Input type="text" name="people"  placeholder="Bạn đi cùng mấy người" />
              <Styled.Input type="text" name="where" placeholder="Bạn sẽ tham dự bữa tiệc nào" />
              <Styled.Input type="text" name="note" placeholder="Bạn có muốn lưu gì ý với chúng mình không" />
            </form>
            <Styled.ButtonWrapper>
              <Styled.Button onClick={handleOnClick}>Gửi ngay</Styled.Button>
            </Styled.ButtonWrapper>
          </Styled.ContentWrapper>
          </Styled.WhiteBackground>
        </Styled.BlueBackground>
        <Styled.Right src={FormRight} alt="right" />
      </Styled.Wrapper>
      <NotificationContainer/>
    </Styled.Container>
  );
};

export default ConfirmForm;
