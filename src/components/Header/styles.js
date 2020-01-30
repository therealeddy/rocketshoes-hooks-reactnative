import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import logo from '../../images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  background: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 20px;
`;

export const ButtonBasket = styled(RectButton)`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ButtonLogo = styled(RectButton)`
  flex: 1;
`;

export const Count = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  background: ${props => (props.cartSize ? '#7159c1' : '#141419')};
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
