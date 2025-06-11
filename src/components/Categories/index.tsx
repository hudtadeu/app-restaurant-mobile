import { FlatList } from "react-native";

import { categories } from "../../mocks/categories";
import { Text } from "../Text";

import { Category, Icon } from "./styles";

export function Categories() {
  return (
    categories.map((category) => (
      <Category key={category._id}>
        <Icon>
          <Text>{category.icon}</Text> {/* Assuming icon is a string, adjust as necessary */}
        </Icon>

        <Text size={14} weight="600">{category.name}</Text>
      </Category>
    ))
  ); // Placeholder for the Categories component
}
