import {
  ArrayInput,
  DateInput,
  Edit,
  NumberInput,
  Show,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  DateField,
  ReferenceField,
  SimpleShowLayout,
  TextField,
  ImageField,
} from "react-admin";

export const CategoryName = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="reference" />
      <TextField source="categoryLabel" />
    </SimpleShowLayout>
  </Show>
);
