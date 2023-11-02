import {
  UPDATE_DATA,
  FILTER_DATA,
  SEARCH_DATA,
  SELECTED_WAREHOUSE,
} from "../Action/Action";

const initialState = {
  rawData: [
    {
      name: "Warehouse-165",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKY-KZQUMgyMiU0kRtUwFFndbspT-K5FfpA&usqp=CAU",
      code: "W-00001",
      id: 1,
      city: "Delhi",
      space_available: 1234,
      type: "Leasable Space",
      cluster: "cluster-a-32",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-276",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs1azERWx8RawApKCB21IqHS__wr-OWnzdw&usqp=CAU",
      code: "W-00002",
      id: 2,
      city: "Chennai",
      space_available: 124,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-3039",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6l1v6HBRRst3mxYsL2OLN9xmtDszQEG2KKw&usqp=CAU",
      code: "W-00003",
      id: 3,
      city: "Indore",
      space_available: 134,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-324",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqR2ob9MeQ2iK5Ys5yUmBKDHCjN0dS40ccQ&usqp=CAU",
      code: "W-00004",
      id: 4,
      city: "Chennai",
      space_available: 12,
      type: "Leasable Space",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-5454",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5dGKnc8qDu4R0hjCBPgjrKh5HC7B3kn6eA&usqp=CAU",
      code: "W-00005",
      id: 5,
      city: "Chennai",
      space_available: 1243434,
      type: "Warehouse Service",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-4345",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5NPBpwIPZm_h7bWFhPrMlLScV4OfXnG1uA&usqp=CAU",
      code: "W-00006",
      id: 6,
      city: "Chennai",
      space_available: 1,
      type: "Leasable Space",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-3455",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5dGKnc8qDu4R0hjCBPgjrKh5HC7B3kn6eA&usqp=CAU",
      code: "W-00007",
      id: 7,
      city: "Mumbai",
      space_available: 4,
      type: "Leasable Space",
      cluster: "cluster-a-2",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-23455",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTnMB6K_FEtiwrpIbLlsAN3RoGbsbuFEQ0Zg&usqp=CAU",
      code: "W-00008",
      id: 8,
      city: "Bangalore",
      space_available: 3456,
      type: "Warehouse Service",
      cluster: "cluster-a-21",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-6457",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQATrOk3Y-qk1QjOUd2C74QLYbsLIzmXgHotg&usqp=CAU",
      code: "W-00009",
      id: 9,
      city: "Bangalore",
      space_available: 1234545,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-32456",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6T3HxZ0smSFlU6f9XS0x6C0KKEbKo-A4pQ&usqp=CAU",
      code: "W-000010",
      id: 10,
      city: "Guwahati",
      space_available: 121234,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-3245678",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet3lM8TcnaAV-mErzhHVhl-lXCP6aR5-qlO58YCYhVszML7XMUQ9xjZwW8xzLHxnurEU&usqp=CAU",
      code: "W-000011",
      id: 11,
      city: "Delhi",
      space_available: 98,
      type: "Leasable Space",
      cluster: "cluster-v-2",
      is_registered: true,
      is_live: false,
    },
    {
      name: "Warehouse-4567",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsTaOpVzY6dqMktyOxBZ98p7Iiq_ogxoayw&usqp=CAU",
      code: "W-000012",
      id: 12,
      city: "Indore",
      space_available: 97,
      type: "Warehouse Service",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: true,
    },
    {
      name: "Warehouse-458",
      img: "https://www.investopedia.com/thmb/4RQmhzxiZBvegLOwuRcRMxh6nLk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-framed-glass-conservatory-attached-to-house-at-sunset--quebec--canada-1057393770-f70cde48f27847009c03065faa2d9bee.jpg",
      code: "W-000013",
      id: 13,
      city: "Delhi",
      space_available: 654,
      type: "Leasable Space",
      cluster: "cluster-a-1",
      is_registered: true,
      is_live: false,
    },
  ],
  filteredData: [],
  selectedWarehouse: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // to update the selected warehouse
    case UPDATE_DATA:
      const updatedDataEdit = state.rawData.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        rawData: updatedDataEdit,
        selectedWarehouse: null,
      };

    case FILTER_DATA:
      const filteredData = state.rawData.filter(
        (item) => item?.[action?.payload.key] === action.payload.value
      );

      return {
        ...state,
        filteredData: filteredData,
      };

    case SEARCH_DATA:
      // payload : "search String" is empty
      if (action.payload === "")
        return {
          ...state,
          filteredData: [],
        };

      // payload : "search String" is not empty
      let loadData =
        state.filteredData.length > 0 ? state.filteredData : state.rawData;
      const searchedData = loadData.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredData: searchedData,
      };

    case SELECTED_WAREHOUSE:
      return {
        ...state,
        selectedWarehouse: action.payload,
      };

    case "SEARCH_WAREHOUSE_EDIT":
      // payload : {"key" : "value"}
      const currentData = state.selectedWarehouse;
      const updatedData = {
        ...currentData,
        // ...action.payload, // both are same
        [action.payload.key]: action.payload.value,
      };
      return {
        ...state,
        selectedWarehouse: updatedData,
      };

    default:
      return state;
  }
};

export default dataReducer;
