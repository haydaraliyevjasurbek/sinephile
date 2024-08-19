// pages
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Tv from "../pages/Tv";
import Search from "../pages/Search";
// react-icon
import { IoSearch } from "react-icons/io5";


export const router = [
    {
        path: '/',
        element: <Home/>,
        name: "Главная"
    },
    {
        path: '/movie',
        element: <Movie/>,
        name: "Фильмы"
    },{
        path: '/tv',
        element: <Tv/>,
        name: "Сериалы"
    },{
        path: '/search',
        element: <Search/>,
        name: <IoSearch />
    },
]