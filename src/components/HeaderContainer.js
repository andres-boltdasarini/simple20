import React from "react";
import Header from "@/components/Header";


class HeaderContainer extends React.Component {


    busket = () => {
        alert('Ваша корзина пуста.')
    }

    render() {

        return (
            <div>
                <Header busket={this.busket}/>
            </div>

        )
    }
}

export default HeaderContainer