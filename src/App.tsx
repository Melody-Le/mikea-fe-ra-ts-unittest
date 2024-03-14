import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
// import { dataProvide as raDataProvider } from "./react-admin-files/raDataProvider";
import { authProvider } from "./react-admin-files/raAuthProvider";
import { Dashboard } from "./components/Dashboard";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/UserList";
import { UserCreate } from "./components/UserCreate";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="users"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
      create={UserCreate}
    />
  </Admin>
);
