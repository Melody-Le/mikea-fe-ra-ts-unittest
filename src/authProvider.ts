import {
  AuthProvider,
  HttpError,
  DataProvider,
  fetchUtils,
  CreateButton,
} from "react-admin";
import data from "./users.json";
import axios from "axios";

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
const apiUrl = "http://localhost:8800/api/v1";
const httpClient = fetchUtils.fetchJson;

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    console.log("START LOGIN");
    const email = username;
    const url = `${apiUrl}/auth/login`;
    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      const user = response.data;
      // eslint-disable-next-line no-unused-vars
      localStorage.setItem("user", JSON.stringify(user));
      return;
    } catch (error) {
      console.log("Caught!", error);
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
