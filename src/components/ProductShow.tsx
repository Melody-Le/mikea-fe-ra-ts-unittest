import {
  CreateButton,
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
} from "react-admin";
import { CategoryName } from "./CategoryName";

export const ProductShow = () => {
  const handleAddCart = (event) => {
    event.preventDefault();
  };
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="categoryId" reference="categories" link="show">
          <TextField source="categoryLabel" />
        </ReferenceField>
        <TextField source="productName" />
        <TextField source="productSlug" />
        <TextField source="productDescription" />
        <ImageField
          source="https://i.pinimg.com/564x/4a/e8/0c/4ae80cedcb9b259b4b700defe0a675b2.jpg"
          title="image"
        />
        <TextField source="room" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <CreateButton label="Add to cart" onClick={handleAddCart} />
      </SimpleShowLayout>
    </Show>
  );
};
