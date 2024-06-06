// Importing necessary libraries and components
import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  CircularProgress,
  Container,
} from "@mui/material";
import axios from "axios";
import "../styles/ProductList.css";

// Defining the ProductList functional component
const ProductList = () => {
  // State variables to manage products, filtered products, search term, and loading status
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch products from the API when the component mounts
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Setting the fetched products to state variables
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false); // Setting loading to false after data is fetched
      })
      .catch((error) => console.error(error)); // Logging errors if any
  }, []);

  // useEffect hook to filter products based on the search term
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  // Event handler to update the search term state
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      {/* Search input field */}
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* Display a loading spinner if data is still being fetched */}
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {/* Mapping through the filtered products and displaying each product */}
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card className="product-card" style={{ backgroundColor: '#f0f0f0' }}>
                {/* Product image */}
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: '350px', width: '100%', objectFit: 'cover' }}
                />
                <CardContent className="card-content">
                  {/* Product title */}
                  <Typography
                    variant="h6"
                    component="div"
                    className="product-title"
                    style={{ color: '#333' }}
                  >
                    {product.title}
                  </Typography>
                  {/* Product description */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="product-description"
                    style={{ color: '#666' }}
                  >
                    {product.description}
                  </Typography>
                  {/* Product price */}
                  <Typography
                    variant="body1"
                    color="error"
                    className="product-price"
                    style={{ color: '#000' }}
                  >
                    Price: ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

// Exporting the ProductList component as the default export
export default ProductList;
