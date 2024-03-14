// import jsonServerProvider from "ra-data-json-server";

import { url } from "inspector";
import { DataProvider, fetchUtils } from "react-admin";
import { CLIENT_RENEG_LIMIT } from "tls";

// export const dataProvider = jsonServerProvider(
//   import.meta.env.VITE_JSON_SERVER_URL
// );
const apiUrl = "http://localhost:8800/api/v1";
const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {
  getList: (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ headers, json }) => {
      console.log(json);
      return {
        data: json,
        total: 123,
      };
    });
  },
  getOne: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url).then(({ json }) => {
      console.log(json);
      return { data: json };
    });
  },
  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },
  /* 
  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    console.log(params.data);
    return httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),
  },
  */
  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    console.log(params.data);
    return httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      console.log("=======>return from update:", json);
      return { data: json };
    });
  },
  create: (resource, params) => {
    const url = `${apiUrl}/auth/register`;
    console.log(params.data);
    return httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      console.log(json);
      return {
        data: { ...params.data, id: json.id } as any,
      };
    });
  },
};
