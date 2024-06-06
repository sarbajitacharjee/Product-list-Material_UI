// Import React library for building user interfaces
import React from 'react';

// Import Material-UI components for UI design
import { AppBar, Toolbar, Typography, Container, CssBaseline } from '@mui/material';

// Import custom component for displaying a list of products
import ProductList from './components/PostList';

// Define the main App component
const App = () => {
  return (
    <React.Fragment>
      {/* Apply baseline CSS to normalize styles across browsers */}
      <CssBaseline />
      
      {/* Define the AppBar component to create a top navigation bar */}
      <AppBar position="static">
        <Toolbar>
          {/* Display the title of the app in the AppBar */}
          <Typography variant="h6">React Material-UI App</Typography>
        </Toolbar>
      </AppBar>
      
      {/* Use Container to center and add margins to the content */}
      <Container style={{ marginTop: '20px' }}>
        {/* Render the ProductList component to display a list of products */}
        <ProductList />
      </Container>
    </React.Fragment>
  );
}; 

// Export the App component as the default export
export default App;
