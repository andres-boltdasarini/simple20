import React from "react";
import '../scss/header.scss'
import {NavLink} from "react-router-dom";


const Bar = () => {
    let busket = () => {
        alert('Ваша корзина пуста.')
    }
    return(
        <div>
        <div className="bar">
            <div className='text'>
                Galaxy S20
            </div>
            <div className='text'>
                <div className='text' >
                    69 999 p
                </div>
                <div className="buy" onClick={busket}>
                    Купить сейчас
                </div>
            </div>

        </div>
    <div className="bar2">
        <div className='text2'>
            <NavLink to="/about">особенности</NavLink>
        </div>
        <div className='text2'>

            <NavLink to="/table">характеристики</NavLink>
        </div>
        <div className='text2'>
            <NavLink to="/support">поддержка</NavLink>
        </div>
        <div className='text2'>
            <NavLink to="/blog">сравнить</NavLink>
        </div>
    </div>
        </div>
    )
}

export default Bar