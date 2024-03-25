import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store'; // Assuming store is exported from store.js
import SignUp from '../src/component/Sign_Up';
import SignIn from '../src/component/Sign_In';
import Restros from '../src/component/Restros';
import Items from '../src/component/Items';
import Cart from '../src/component/Cart';
import FinalOrder from '../src/component/FinalOrder';
import Home from './component/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<SignIn />} />
          <Route path="/Restros" element={<Restros />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/FinalOrder" element={<FinalOrder />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
