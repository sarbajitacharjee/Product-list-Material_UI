import React from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@mui/material';
import ProductList from './components/PostList';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React Material-UI App</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '20px' }}>
        <ProductList />
      </Container>
    </React.Fragment>
  );
}; 

export default App;


