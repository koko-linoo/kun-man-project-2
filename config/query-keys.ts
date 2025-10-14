export const employeeKeys = {
  all: ["employee-list"],
  list: (query?: object) => {
    return ["employee-list", query];
  },
};

export const sapaKeys = {
  all: ["sapa-list"],
  list: (query?: object) => {
    return ["sapa-list", query];
  },
};

export const sanKeys = {
  all: ["san-list"],
  list: (query?: object) => {
    return ["san-list", query];
  },
};

export const purchaseKeys = {
  all: ["purchase-list"],
  list: (query?: object) => {
    return ["purchase-list", query];
  },
};

export const purchaseTotalKeys = {
  all: ["purchase-total"],
  list: (query?: object) => {
    return ["purchase-total", query];
  },
};

export const millingKeys = {
  all: ["milling-list"],
  list: (query?: object) => {
    return ["milling-list", query];
  },
};

export const saleKeys = {
  all: ["sale-list"],
  list: (query?: object) => {
    return ["sale-list", query];
  },
};

export const saleTotalKeys = {
  all: ["sale-total"],
  list: (query?: object) => {
    return ["sale-total", query];
  },
};

export const remainingKeys = {
  all: ["remaining-list"],
  list: (query?: object) => {
    return [...remainingKeys.all, query];
  },
};
