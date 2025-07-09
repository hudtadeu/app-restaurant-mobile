import { FlatList, Touchable, TouchableOpacity } from 'react-native';

import { CartItem } from '../../types/CartItem';
import { Text } from '../Text';

import { Item, ProductContainer, Actions, Image, QuantityContainer, ProductDetails, Summary, TotalContainer } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Button } from '../Button';


interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <>
      {cartItems.length > 0 && (
      <FlatList
        data={cartItems}
        keyExtractor={cartItem => cartItem.product._id}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, maxHeight: 150 }}
        renderItem={({ item: cartItem }) => (
          <Item>
            <ProductContainer>
              <Image
                source={{ uri: cartItem.product.imagePath }}
              />

              <QuantityContainer>
                <Text size={14} color="#666">{cartItem.quantity}x</Text>
              </QuantityContainer>

              <ProductDetails>
                {cartItems.length > 0 ? (
                  <>
                    <Text size={14} color="#666">Total</Text>
                    <Text size={20} weight="600">{formatCurrency(cartItem.product.price)}</Text>
                  </>
                ) : (
                  <Text size={14} color="#999">Seu carrinho está vazio</Text>
                )}
              </ProductDetails>
            </ProductContainer>

            <Actions>
              <TouchableOpacity style={{ marginRight: 24 }}>
                <PlusCircle/>
              </TouchableOpacity>

              <TouchableOpacity>
                <MinusCircle/>
              </TouchableOpacity>
            </Actions>
          </Item>
        )}
      />
      )}

    <Summary>
     <TotalContainer>
      <Text color="#666">Total</Text>
      <Text size={20} weight="600">{formatCurrency(cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0))}</Text>
     </TotalContainer>

     <Button
        onPress={() => alert('Confirmar pedido')}
        disabled={cartItems.length === 0}
      >
        Confirmar pedido
      </Button>
    </Summary>
    </>
  );
}
