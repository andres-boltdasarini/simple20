import React, { Component } from "react";
import About from "@/components/About";
import Support from "@/components/Support";
import {Route} from "react-router-dom";
import Account from "@/components/Account";
import HeaderContainer from "@/components/HeaderContainer";




class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <Route exact={true} path='/' component={About}/>
                <Route path='/about' component={About}/>
                <Route path='/support' render={() => <Support/>}/>
                <Route path='/account' render={() => <Account/>}/>
            </div>
        )
    }
}

export default App;