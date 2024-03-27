// // import jsonServerProvider from "ra-data-json-server";

// import { url } from "inspector";
// import { DataProvider, fetchUtils } from "react-admin";
// import { CLIENT_RENEG_LIMIT } from "tls";
// import { rename } from "./utils";
// import * as qs from "qs";
// // export const dataProvider = jsonServerProvider(
// //   import.meta.env.VITE_JSON_SERVER_URL
// // );
// const apiUrl = "http://localhost:8800/api/v1";
// const httpClient = fetchUtils.fetchJson;

// export const dataProvider: DataProvider = {
//   getList: (resource, params) => {
//     const url = `${apiUrl}/${resource}`;
//     return httpClient(url).then(({ headers, json }) => {
//       console.log(json);
//       return {
//         data: json,
//         total: 123,
//       };
//     });
//   },
//   getOne: (resource, params) => {
//     console.log(params);
//     const url = `${apiUrl}/${resource}/${params.id}`;
//     return httpClient(url).then(({ json }) => {
//       console.log(json);
//       return { data: json };
//     });
//   },

//   getMany: (resource, params) => {
//     console.log("get Many params:", params);
//     // const query = {
//     //   filter: JSON.stringify({ id: params.ids }),
//     // };
//     const query = {
//       id: params.ids,
//     };
//     console.log(params.ids);

//     // const url = `${apiUrl}/${resource}/${params.ids}`;
//     const url = `${apiUrl}/${resource}?id=${params.ids}`;
//     console.log("url :", url);
//     return httpClient(url).then(({ json }) => {
//       console.log("json is:", json.allCategories);
//       return { data: json.allCategories };
//     });
//   },
//   update: (resource, params) => {
//     let url;
//     url = `${apiUrl}/${resource}/${params.id}`;
//     console.log(params.data);
//     console.log(url);
//     return httpClient(url, {
//       method: "PUT",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => {
//       // console.log("=======>return from update:", json);
//       return { data: json };
//     });
//   },
//   create: (resource, params) => {
//     const url = `${apiUrl}/auth/register`;
//     return httpClient(url, {
//       method: "POST",
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => {
//       console.log(json);
//       return {
//         data: { ...params.data, id: json.id } as any,
//       };
//     });
//   },
//   delete: (resource, params) => {
//     const url = `${apiUrl}/${resource}/${params.id}`;
//     return httpClient(url, { method: "DELETE" }).then(({ json }) => {
//       return { data: json };
//     });
//   },
//   // deleteMany: () => Promise.resolve(),
// };
