import {
  ArrayInput,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="productDescription" />
      <TextInput source="productImages" />
      <TextInput source="room" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);
