import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, ButtonBasket, ButtonLogo, Count } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <ButtonLogo onPress={() => navigation.navigate('Main')}>
        <Logo />
      </ButtonLogo>
      <ButtonBasket onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Count cartSize={cartSize}>{cartSize}</Count>
      </ButtonBasket>
    </Container>
  );
}
