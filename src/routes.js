import Homepage from './Components/Hompage/Homepage'
import MovieDetail from './Components/MovieDetail/MovieDetail'
import Playing from './Components/ListMovies/Playing/Playing'
import Upcoming from './Components/ListMovies/Upcoming/Upcoming'
import LoginPage from './Components/Auth/LoginPage'
import RegisterPage from './Components/Auth/RegisterPage'
import UserInfo from './Components/Auth/UserInfo'
import BookTicket from './Components/Booking/BookTicket/BookTicket'
import BookSeat from './Components/Booking/BookSeat/BookSeat'
import VerifyCodePage from './Components/Auth/VerifyCodePage'

import {Ad_Movie as Admin} from './Components/Admin/Ad_Film/Ad_Film'
import {Add as Add_Movie} from './Components/Admin/Ad_Movie/CRUD/Add'
import {Edit as Edit_Movie} from './Components/Admin/Ad_Movie/CRUD/Edit'
import {Delete as Delete_Movie} from './Components/Admin/Ad_Movie/CRUD/Delete'
import Ad_Schedule from './Components/Admin/Ad_Schedule/Ad_Schedule'
import {Add as Add_Schedule} from './Components/Admin/Ad_Schedule/CRUD/Add'
import {Edit as Edit_Schedule} from './Components/Admin/Ad_Schedule/CRUD/Edit'
import {Delete as Delete_Schedule} from './Components/Admin/Ad_Schedule/CRUD/Delete'
import Ad_User from './Components/Admin/Ad_User/Ad_User'
import Block from './Components/Admin/Ad_User/CRUD/Block'
import UnBlock from './Components/Admin/Ad_User/CRUD/UnBlock'
import {Delete as Delete_User} from './Components/Admin/Ad_User/CRUD/Delete'

export const routes = [
    {
        path: "/",
        element: <Homepage/>,
        index: true
    },
    {
        path: "/Detail/:id",
        element: <MovieDetail/>,
        index: false
    },
    {
        path: "/Playing",
        element: <Playing/>,
        index: false
    },
    {
        path: "/Upcoming",
        element: <Upcoming/>,
        index: false
    },
    {
        path: "/Login",
        element: <LoginPage/>,
        index: false
    },
    {
        path: "/Register",
        element: <RegisterPage/>,
        index: false
    },
    {
        path: "/Verify",
        element: <VerifyCodePage/>,
        index: false
    },
    {
        path: "/User",
        element: <UserInfo/>,
        index: false
    },
    {
        path: "/Bookticket/:id",
        element: <BookTicket/>,
        index: false
    },
    {
        path: "/BookSeat/:id",
        element: <BookSeat/>,
        index: false
    },
    {
        path: "/Admin",
        element: <Admin/>,
        index: false
    },
    {
        path:"/AddMovie",
        element: <Add_Movie/>,
        index: false
    },
    {
        path:"/EditMovie/:id",
        element: <Edit_Movie/>,
        index: false
    },
    {
        path:"/DeleteMovie/:id",
        element: <Delete_Movie/>,
        index: false
    },
    {
        path:"/Ad_Schedule",
        element: <Ad_Schedule/>,
        index: false
    },
    {
        path:"/AddSchedule",
        element: <Add_Schedule/>,
        index: false
    },
    {
        path:"/EditSchedule/:id",
        element: <Edit_Schedule/>,
        index: false
    },
    {
        path:"/DeleteSchedule/:id",
        element: <Delete_Schedule/>,
        index: false
    },
    {
        path:"/Ad_User",
        element: <Ad_User/>,
        index: false
    },
    {
        path:"/Block/:id",
        element: <Block/>,
        index: false
    },
    {
        path:"/UnBlock/:id",
        element: <UnBlock/>,
        index: false
    },
    {
        path:"/DeleteUser/:id",
        element: <Delete_User/>,
        index: false
    },
    
]