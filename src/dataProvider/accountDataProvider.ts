import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
const apiUrl = "https://my.api.com/";
const httpClient = fetchUtils.fetchJson;
const data = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    roles: [1, 2, 3],
    status: "active",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanne@melissa.tv",
    roles: [1, 4],
    status: "active",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    roles: [],
    status: "active",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    roles: [],
    status: "active",
  },
  {
    id: 5,
    name: "Chelsy Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    roles: [],
    status: "disabled",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    roles: [],
    status: "active",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    roles: [],
    status: "active",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    roles: [],
    status: "active",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    roles: [],
    status: "disabled",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    roles: [],
    status: "disabled",
  },
];
export const accountDataProvider: DataProvider = {
  getList: (resource, params) => {
    console.log("getList");
    return Promise.resolve({
      data: data,
      total: 100,
    });
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
    debugger;
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
  },
  update: (resource, params) => {
    return Promise.resolve({
      data: { ...params.data },
    });
  },
  updateMany: (resource, params) => {
    debugger;
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
