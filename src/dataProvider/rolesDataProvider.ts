import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "https://my.api.com/";
const httpClient = fetchUtils.fetchJson;

const data = [
  {
    id: 1,
    name: "Super Admin",
    description: "This is super admin description",
  },
  {
    id: 2,
    name: "Admin",
    description: "This is admin description",
  },
  {
    id: 3,
    name: "Approver",
    description: "This is Approver description",
  },
  {
    id: 4,
    name: "Requester",
    description: "This is Requester description",
  },
  {
    id: 5,
    name: "Appointed Operator",
    description: "This is super Appointed Operator description",
  },
];

export const roleDataProvider: DataProvider = {
  getList: (resource, params) => {
    return Promise.resolve({ data: data, total: 10 });
  },
  getOne: (resource, params) => {
    return Promise.resolve({
      data: data.find((obj) => obj.id === parseInt(params.id)),
    });
  },
  getMany: (resource, params) => {
    return Promise.resolve({
      data: data.filter((obj) => params.ids.includes(obj.id)),
    });
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  create: (resource, params) => {
    debugger;
    return Promise.resolve({ data: { ...params.data, id: 1 } });
    // return httpClient(`${apiUrl}/${resource}`, {
    //     method: 'POST',
    //     body: JSON.stringify(params.data),
    // }).then(({ json }) => ({
    //     data: { ...params.data, id: json.id },
    // }))
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};
