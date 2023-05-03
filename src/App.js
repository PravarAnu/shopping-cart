import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
