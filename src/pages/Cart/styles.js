import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #191920;
`;

export const CartView = styled.View`
  width: 100%;
  border-radius: 5px;
  background: #fff;
  padding: 15px;
  margin-bottom: 40px;
`;

export const Product = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const TopProduct = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const ImageProduct = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;

export const DescriptionProduct = styled.View`
  flex: 1;
  justify-content: center;
`;

export const TitleProduct = styled.Text`
  margin: 0;
  font-size: 14px;
`;

export const PriceProduct = styled.Text`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const PriceCountProduct = styled.Text`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonDelete = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomProduct = styled.View`
  width: 100%;
  border-radius: 5px;
  background: #dedede;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Quantity = styled.View`
  width: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputNumber = styled.TextInput`
  background: #fff;
  padding: 0px 10px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  color: #000000;
`;

export const Total = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleTotal = styled.Text`
  text-transform: uppercase;
  color: #999999;
  font-weight: bold;
  font-size: 18px;
`;

export const PriceTotal = styled.Text`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonFinish = styled(RectButton)`
  width: 100%;
  background: #7159c1;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonFinishText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;
