import React from "react";
import '../scss/about.scss'
import * as axios from "axios";
import {NavLink} from "react-router-dom";


class Account extends React.Component {
    state = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    };
    login = (email, password) => {
        this.setState({
            email: email,
            password: password
        })
        axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
            email, password,
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                   this.me()
                }
            });
    }

    me() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login} = response.data.data;
                    this.setState({
                        userId: id,
                        login: login,
                        isAuth: true

                    })
                }
            });
    }


    render() {
        let loginElement = React.createRef();
        let passwordElement = React.createRef();
        let addEmail = () => {
            let email = loginElement.current.value;
            let password = passwordElement.current.value;
            this.login(email,password);
        }
        return (
            <div className='body'>
                {this.state.isAuth ? <div>{this.state.login}</div>
                  : <div>
                     <h1>Вход в Samsung Account</h1>
                    <input
                    ref={loginElement} value={this.state.email}>
                    </input >
                    <input
                    ref={passwordElement} value={this.state.password}>
                    </input >
                    <div className="buy" onClick={addEmail}>войти</div>
                   </div>}
            </div>
        )
    }
}
export default Account