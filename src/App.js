import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Shop/>} />
          <Route path='checkout' element={<Checkout/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
