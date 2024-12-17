import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateCustomerForm from './assets/CreateCustomerForm';
import CustomerDetails from './assets/CustomerDetails';
import ProductList from './assets/ProductList';
import CreateProductForm from './assets/CreateProductForm';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/customers/create">Create Customer</Link> | <Link to="/products">Products</Link>
      </nav>
      <Switch>
        <Route path="/customers/create" component={CreateCustomerForm} />
        <Route path="/customers/:customerId" component={CustomerDetails} />
        <Route path="/products" component={ProductList} />
        <Route path="/products/create" component={CreateProductForm} />
      </Switch>
    </Router>
  );
};

export default App;