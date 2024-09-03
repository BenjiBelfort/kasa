import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import PageA from "./pages/PageA"
import PageB from "./pages/PageB"

function App() {
  return (
    <Router>
      <nav>
          <ul>
            <li><Link to="/A">Page A</Link></li>
            <li><Link to="/B">Page B</Link></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/A" element={<PageA />}/>
        <Route path="/B" element={<PageB />}/>
      </Routes>
    </Router>
  )
}

export default App
