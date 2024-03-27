import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
// import { dataProvide as raDataProvider } from "./react-admin-files/raDataProvider";
import { Dashboard } from "./components/Dashboard";
import dataProvider from "./dataProvider/index";
import { UserList } from "./components/UserList";
import { UserCreate } from "./components/UserCreate";
import { ProductList } from "./components/ProductList";
import { ProductShow } from "./components/ProductShow";
import { ProductEdit } from "./components/ProductEdit";
import { AccountList } from "./AccountList";

console.log(dataProvider);

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    {/* <Resource
      name="users"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
      create={UserCreate}
    />
    <Resource
      name="products"
      list={ProductList}
      show={ProductShow}
      edit={ProductEdit}
    />
    <Resource name="card" show={ProductShow} edit={ProductEdit} /> */}
    <Resource name="accounts" list={AccountList} />
  </Admin>
);
