import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./home.css";
import FewListing from "../FewListing/FewListing";
import Button from "@mui/material/Button";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Import Link as RouterLink

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero-section">
        <h1 className="hero-title ">
          A man travels the world over in search of what he needs and returns
          home to find it.
        </h1>
      </div>
      <div className="card-container">
        <h1 className="featured-listings-title">Active Listings</h1>
        <FewListing />
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "15vh",
          }}
        >
          <Link component={RouterLink} to="/activeList">
            {" "}
            {/* Use RouterLink from react-router-dom */}
            <Button variant="contained" color="primary">
              View All
            </Button>
          </Link>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Home;
