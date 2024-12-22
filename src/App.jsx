//Styling
import './App.css'

//Components
import {Routes, Route, NavLink} from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import Blogposts from "./pages/blogposts/Blogposts.jsx";
import Blogpost from "./pages/blogpost/Blogpost.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";

//Assets
import logo from './assets/logo-medium.png'


function App() {
    return (
        <div className="page-container">
            <header>
                <div>
                    <img src={logo} alt="Company logo"/>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "menu-link--active" : "menu-link--default"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogposts"
                                className={({ isActive }) => isActive ? "menu-link--active" : "menu-link--default"}
                            >
                                Alle posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/newpost"
                                className={({ isActive }) => isActive ? "menu-link--active" : "menu-link--default"}
                            >
                                Nieuwe post maken
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogposts/:id" element={<Blogpost />} />
                    <Route path="/blogposts" element={<Blogposts />} />
                    <Route path="/newpost" element={<NewPost />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
