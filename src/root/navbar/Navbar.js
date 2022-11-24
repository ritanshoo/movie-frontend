import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import brand from "../../assests/image/M4U.png"
import * as userUtil from '../../util/userUtil'
import * as userActions from '../../redux/user/user.actions'
import {useDispatch, useSelector} from "react-redux";
import * as userReducer from '../../redux/user/user.reducer'
import '../../App.css'

let Navbar = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let userData = useSelector((state) => {
        return state[userReducer.userReducerFeatureKey]
    });


    let beforeLoginLinks = () => {
        return (
            <React.Fragment>
                <li className="nav-item ">
                    <Link to="/user/login" className="nav-link"><i className="fa fa-sign-in-alt "/>  Login</Link>
                </li>


                <li className="nav-item ">
                    <Link to="/user/register" className="nav-link"><i className="fa fa-users-cog "/>  Register</Link>
                </li>
            </React.Fragment>
        )
    };


    let clickLogOut = (event) => {
        event.preventDefault();
        dispatch(userActions.logoutUser(navigate('/')));
    }

    let afterLoginLinks = () => {
        return(
            <React.Fragment>
                {/*// logout symbol*/}

                <li className="nav-item ">
                    <Link to="/" className="nav-link mt-2" onClick={clickLogOut}><i className="fa fa-sign-out-alt "/> LogOut</Link>
                </li>
            </React.Fragment>
        )
    }


    return (
        <React.Fragment>
            <nav className=" nav-bg navbar navbar-light bg-light navbar-expand-sm navbar-static-top">
               <div className="container">
                   <Link to="/" className = " nav navbar-brand">
                       <img src={brand} className=" image" alt=""/>
                   </Link>




                   <div className="collapse navbar-collapse">
                       <ul className="navbar-nav">
                           <li className="nav-item">
                               <Link to="/home2" className="nav-link  ml-3 mt-2"><i className="fa fa-film"/>    Watch List</Link>
                           </li>

                       </ul>


                       <ul className="navbar-nav ml-auto">
                           {
                               userUtil.isLoggedIn() ? afterLoginLinks() : beforeLoginLinks()
                           }
                       </ul>
                   </div>
               </div>

            </nav>
        </React.Fragment>
    );

};
 export default Navbar;

