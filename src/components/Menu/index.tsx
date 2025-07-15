import { FlatList, TouchableOpacity } from "react-native";


import { Text } from "../Text";

import { ProductContainer, ProductImage, ProductDetails, Separator, AddToCardButton } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";

// Importar imagens locais
import quatroQueijosImg from '../../assets/images/quatro-queijos.png';
import cocaColaImg from '../../assets/images/coca-cola.png';
import chickenImg from '../../assets/images/chicken.png';
import sucoLaranjaImg from '../../assets/images/suco-de-laranja.png';
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { Product } from "../../types/Product";

const productImages: Record<string, any> = {
  '1668472896991-quatro-queijos.png': quatroQueijosImg,
  '1668473462705-coca-cola.png': cocaColaImg,
  '1668473462705-chicken.png': chickenImg,
  '1668473462705-suco-de-laranja.png': sucoLaranjaImg,
};

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  return (
    <>
    <ProductModal
      visible={isModalVisible}
      onClose={() => setIsModalVisible(false)}
      product={selectedProduct}
      onAddToCart={onAddToCart}
    />
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product}) => (
        <ProductContainer onPress={() => handleOpenModal(product)}>
          <ProductImage
            source={productImages[product.imagePath]}
          />
          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666666" style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>

          <AddToCardButton onPress={() => onAddToCart(product)}>
            <PlusCircle />
          </AddToCardButton>
        </ProductContainer>
      )}
    />
    </>
  );
}
