import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ListProducts,
  Preview,
  Title,
  Content,
  Price,
  ButtonCart,
  Count,
  ButtonCartText,
  AmountText,
  AreaTextButton,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sunAmount, product) => {
      sunAmount[product.id] = product.amount;
      return sunAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ScrollView horizontal>
        <ListProducts>
          {products.map(product => (
            <Product key={String(product.id)}>
              <Preview source={{ uri: product.image }} />
              <Content>
                <View>
                  <Title>{product.title}</Title>
                  <Price>{product.priceFormatted}</Price>
                </View>
                <ButtonCart onPress={() => handleAddProduct(product.id)}>
                  <Count>
                    <Icon name="add-shopping-cart" color="#FFF" size={15} />
                    <AmountText>{amount[product.id] || 0}</AmountText>
                  </Count>
                  <AreaTextButton>
                    <ButtonCartText>Adicionar</ButtonCartText>
                  </AreaTextButton>
                </ButtonCart>
              </Content>
            </Product>
          ))}
        </ListProducts>
      </ScrollView>
    </Container>
  );
}
