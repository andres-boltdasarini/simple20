import React from "react";
import '../scss/about.scss'
import Bar from "@/components/Bar";

const About = () => {
    return (
        <div className='body'>
            <Bar/>
            <h1>Телефон, меняющий взгляд на фотосъемку.</h1>
            <div>
                Встречайте Galaxy S20. Благодаря функции 8K Video Snap, вы получаете уникальную возможность снимать видео и превращать кадры снятого видео в фотографии высокого разрешения. Добавьте к этому надежную защиту ваших данных с помощью встроенной платформе безопасности Samsung Knox, умную батарею, мощный процессор и огромную встроенную память — и смартфон Galaxy S20 откроет перед вами новый мир возможностей, доступных теперь с помощью мобильного телефона.
            <br/>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <img src='https://images.samsung.com/is/image/samsung/ru-feature-this-is-the-phone-that-will-change-photography-238743452?$FB_TYPE_A_JPG$'
                     alt='foto' className='img-test'/>
            </div>

            <br/>
            <br/>
                 <div>
                     *Функция 8K Video Snap позволяет превращать кадры 8K видео в великолепные фотоснимки с разрешением 33 МП.
                 </div>
            <br/>
            <br/>
        </div>
    )
}

export default About