import { Modal } from "react-native";
import { Text } from "../Text";
import { Image, CloseButton } from "./styles";
import { Product } from "../../types/Product";
import { Close } from "../Icons/Close";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: null | Product;
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  if (!product) {
    return null;
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: product ? product.imagePath : '',
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>
    </Modal>
  );
}
