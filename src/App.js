import Navi from './partials/Navi';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './components/pages/AboutPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import GifSearchPage from './components/pages/GifSearchPage';
import GifSavePage from './components/pages/GifSavePage';
import HomePage from './components/pages/HomePage';


function App() {

return (

     <Router>
      <Navi/>
      <Routes>

        <Route index element ={<HomePage/>}/>
        <Route path = '/about' element ={<AboutPage/>}/>
        <Route path = '/login' element ={<LoginPage/>}/>
        <Route path = '/register' element ={<RegisterPage/>}/>
        <Route path = '/gifs/search' element ={<GifSearchPage/>}/>
        <Route path = '/gifs/save' element ={<GifSavePage/>}/>

      </Routes>
     </Router>
     )

};

export default App;
