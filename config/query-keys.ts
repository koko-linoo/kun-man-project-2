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

export const purchaseKeys = {
  all: ["purchase-list"],
  list: (query?: object) => {
    return ["purchase-list", query];
  },
};
