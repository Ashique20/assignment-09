
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/Header/Header';
import MoreReviews from './components/More reviews/MoreReviews';
import Rate from './components/Ratings/Rate';
import Error from './components/Error/Error';

function App() {
  return (
    
    <div className="App">
      <Header></Header>
     
      
      <Routes>
        <Route path='/' element={<Rate></Rate>}></Route>
        <Route path='/more' element={<MoreReviews></MoreReviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
