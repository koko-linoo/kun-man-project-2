export const employeeKeys = {
  all: ["employee-list"],
  list: (query?: object) => {
    return ["employee-list", query];
  },
};
