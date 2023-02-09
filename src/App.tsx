import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllNews from './components/AllNews/AllNews'
import News from './components/News/News'
import Navbar from './components/Navbar/Navbar'
import NewsContainer from './components/NewsContainer/NewsContainer'


function App() {


  return (
    <div>
<Router>
<Navbar/>
<NewsContainer filter/>

  </Router> 
    </div>
  )
}



export default App
