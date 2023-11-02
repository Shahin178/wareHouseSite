import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./ActiveList.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchComponent from "./searchComponent";
import FilterComponent from "./filterComponent";
// Redux dispatch and redux selector
import { useSelector } from "react-redux";
// import {
//   selectedWarehouseAction,
//   selectedWarehouseEditAction,
//   selectedWarehouseUpdateAction,
// } from "../Action/Action";

const ActiveList = (props) => {
  const [currentData, setCurrentData] = useState([]);

  // use redux dispatch to update the state
  // const dispatch = useDispatch();

  // use redux selector to get the state
  // initial state is {rawData: [], filteredData: [], selectedWarehouse: null}
  const data = useSelector((state) => state.data);
  const { filteredData, rawData } = data;

  // to use raw data if the filtered data is empty or serach query is empty
  useEffect(() => {
    const useData = filteredData.length > 0 ? filteredData : rawData;
    setCurrentData(useData);
  }, [filteredData, rawData]);

  // // to set the clicked warehouse as selected warehouse
  // const handleSelectedWarehouse = (warehouse) => {
  //   dispatch(selectedWarehouseAction(warehouse));
  // };

  // // to edit the selected warehouse
  // const handleEditWarehouse = (editKey, editValue) => {
  //   dispatch(selectedWarehouseEditAction({ key: editKey, value: editValue }));
  // };

  // // const to update the selected warehouse
  // const handleUpdateWarehouse = () => {
  //   dispatch(selectedWarehouseUpdateAction());
  // };

  return (
    <>
      <Header />
      <div className="main">
        <h1>Active Listings</h1>
        <SearchComponent />
        <FilterComponent />

        <Grid container spacing={2} style={{ paddingTop: "16px" }}>
          {currentData?.length > 0 ? (
            currentData.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Link
                  to={{
                    pathname: `/detail/${item.id}`,
                    state: { id: item.id },
                  }}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.img}
                        alt={item.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          City: {item.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Type: {item.type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default ActiveList;
