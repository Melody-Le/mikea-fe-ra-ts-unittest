import { Datagrid, ImageField, List, TextField } from "react-admin";

export const ProductList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="productSlug" />
        <TextField source="productName" />
        <TextField source="productDescription" />
        <ImageField source="productImages" title="image" />
      </Datagrid>
    </List>
  );
};
