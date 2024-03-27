import { DataProvider, combineDataProviders } from "react-admin";
import { accountDataProvider } from "./accountDataProvider";
import { roleDataProvider } from "./rolesDataProvider";

const dataProvider: DataProvider = combineDataProviders((resource) => {
  switch (resource) {
    case "accounts":
      return accountDataProvider;
    case "roles":
      return roleDataProvider;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
});
export default dataProvider;
