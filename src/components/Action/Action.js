export const UPDATE_DATA = "UPDATE_DATA";
// export const FILTER_DATA_CITY = "FILTER_DATA_CITY";
// export const FILTER_DATA_CLUSTER = "FILTER_DATA_CLUSTER";
// export const FILTER_DATA_IS_LIVE = "FILTER_DATA_IS_LIVE";
export const SEARCH_DATA = "SEARCH_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const SELECTED_WAREHOUSE = "SELECTED_WAREHOUSE";
export const SEARCH_WAREHOUSE_EDIT = "SEARCH_WAREHOUSE_EDIT";

// payload : {"key" : "value"}
export const filterData = (payload) => {
  return {
    type: FILTER_DATA,
    payload,
  };
};

// payload : "search String"
export const searchAction = (payload) => {
  return {
    type: SEARCH_DATA,
    payload,
  };
};

// payload : warehouse object
export const selectedWarehouseAction = (payload) => {
  return {
    type: SELECTED_WAREHOUSE,
    payload,
  };
};

// payload : {"key" : "value"}
export const selectedWarehouseEditAction = (payload) => {
  return {
    type: SEARCH_WAREHOUSE_EDIT,
    payload,
  };
};

export const selectedWarehouseUpdateAction = () => {
  return {
    type: UPDATE_DATA,
  };
};
