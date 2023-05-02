import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
