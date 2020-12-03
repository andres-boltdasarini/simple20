import React from "react";
import '../scss/header.scss'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <div className="header">
                <NavLink to="/">
                    <img src='https://teliumnetwork.se/wp-content/uploads/2017/03/Font-Samsung-Logo.jpg'
                         alt='ava'/>
                </NavLink>
                <div>
                    <div className="button">
                        <NavLink to="/account"><AccountBoxIcon/></NavLink>
                    </div>
                    <div className="button">
                        <ShoppingCartIcon onClick={props.busket}>
                        </ShoppingCartIcon>
                    </div>
                    <div className="button">
                        <SearchIcon/>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Header