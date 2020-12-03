import React from "react";
import '../scss/about.scss'
import '../scss/header.scss'
import Bar from "@/components/Bar";

const Support = () => {
    return (
        <div className='body'>
            <Bar/>
            <h1>Поддержка</h1>
            <div>
                Поиск магазинов поблизости.
                Будет использована информация о местоположении устройства.
                <br/>
            </div>
            <br/>
            <div className="buy">
                Перейти в поддержку->
            </div>
            <br/>
        </div>
    )
}


export default Support