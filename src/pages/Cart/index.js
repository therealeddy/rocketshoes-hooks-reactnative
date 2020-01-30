import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

import {
  Container,
  CartView,
  Product,
  TopProduct,
  ImageProduct,
  DescriptionProduct,
  TitleProduct,
  PriceProduct,
  ButtonDelete,
  BottomProduct,
  Quantity,
  InputNumber,
  PriceCountProduct,
  Total,
  TitleTotal,
  PriceTotal,
  ButtonFinish,
  ButtonFinishText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartView>
        {cart.map(product => (
          <Product key={String(product.id)}>
            <TopProduct>
              <ImageProduct
                source={{
                  uri: product.image,
                }}
              />
              <DescriptionProduct>
                <TitleProduct>{product.title}</TitleProduct>
                <PriceProduct>{product.priceFormatted}</PriceProduct>
              </DescriptionProduct>
              <ButtonDelete
                onPress={() => dispatch(CartActions.removeFromCart(product.id))}
              >
                <Icon name="delete-forever" color="#7159C1" size={25} />
              </ButtonDelete>
            </TopProduct>
            <BottomProduct>
              <Quantity>
                <RectButton onPress={() => decrement(product)}>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159C1"
                    size={18}
                  />
                </RectButton>
                <InputNumber editable={false} value={String(product.amount)} />
                <RectButton onPress={() => increment(product)}>
                  <Icon name="add-circle-outline" color="#7159C1" size={18} />
                </RectButton>
              </Quantity>
              <PriceCountProduct>{product.subtotal}</PriceCountProduct>
            </BottomProduct>
          </Product>
        ))}
        <Total>
          <TitleTotal>Total</TitleTotal>
          <PriceTotal>{total}</PriceTotal>
        </Total>
        <ButtonFinish>
          <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
        </ButtonFinish>
      </CartView>
    </Container>
  );
}
