import client, { METHODS } from "./client";

export const api = {
  auth: {
    login: (params) =>
      client({
        url: "/api/user/signin",
        data: params,
        method: METHODS.POST,
      }),
    register: (params) =>
      client({
        url: "/api/user/signup",
        data: params,
        method: METHODS.POST,
      }),
  },
  profile: {
    get: () =>
      client({
        url: "/api/user/profile",
        method: METHODS.GET,
      }),
  },
  category: {
    get: (data) =>
      client({
        url: `/api/product/getbycategory/${data}`,
        method: METHODS.GET,
      }),
  },
  product: {
    get: (data) =>
      client({
        url: `/api/product/searchproduct?q=${data}`,
        method: METHODS.GET,
        ...data,
      }),
    getProductById: (id) =>
      client({
        url: `/api/product/getproductbyid/${id}`,
        method: METHODS.GET,
      }),
    post: (params) =>
      client({
        url: "/product",
        data: params,
        method: METHODS.POST,
      }),
    patch: ({ _id, ...params }) =>
      client({
        url: `/product/${_id}`,
        data: params,
        method: METHODS.PATCH,
      }),
    delete: (params) =>
      client({
        url: `/product/${params}`,
        method: METHODS.DELETE,
      }),
  },
  review: {
    get: (id) =>
      client({
        url: `/product/review/${id}`,
        method: METHODS.GET,
      }),
    post: (params) =>
      client({
        url: "/product/review",
        data: params,
        method: METHODS.POST,
      }),
  },

  cart: {
    add: (data) =>
      client({
        url: "/api/product/addtocart",
        data: data,
        method: METHODS.POST,
      }),

    removeMulti: (data) =>
      client({
        url: `/cart/removemulti`,
        method: METHODS.POST,
        ...data,
      }),
    get: () =>
      client({
        url: "/api/product/getusercart",
        method: METHODS.GET,
      }),
    update: (data) =>
      client({
        url: `/api/product/updatecart/${data.id}`,
        method: METHODS.PUT,
        data: data,
      }),
    remove: (data) =>
      client({
        url: `/api/product/removefromcart/${data}`,
        method: METHODS.DELETE,
        data: data,
      }),
  },

  checkout: {
    create: (params) =>
      client({
        url: "/order/checkout",
        data: params,
        method: METHODS.POST,
      }),
  },
  confirmation: {
    verified: (params) =>
      client({
        url: "/order/addMyOrder",
        data: params,
        method: METHODS.POST,
      }),
  },
};
