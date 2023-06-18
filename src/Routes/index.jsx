import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route path='/Contact' element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  )
}
