import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px 0;
  background-color: #191920;
`;

export const Product = styled.View`
  width: 220px;
  height: 380px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
`;

export const ListProducts = styled.View`
  flex-direction: row;
`;

export const Preview = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ButtonCart = styled(RectButton)`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: #7159c1;
  flex-direction: row;
`;

export const Count = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  padding: 0 12px;
`;

export const AmountText = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const AreaTextButton = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonCartText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;
