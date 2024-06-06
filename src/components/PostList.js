import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  CircularProgress,
  Container,
//   CardMedia,
} from "@mui/material";
import axios from "axios";
import "../styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
<Card className="product-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ height: '350px', width: '100%', objectFit: '' }}
      />
      <CardContent className="card-content">
        <Typography
          variant="h6"
          component="div"
          className="product-title"
          style={{ color: '#333' }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className="product-description"
          style={{ color: '#666' }}
        >
          {product.description}
        </Typography>
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

export default ProductList;
