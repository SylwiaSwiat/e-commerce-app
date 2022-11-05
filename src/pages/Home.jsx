import React from 'react';
import ImageSlider from './ImageSlider'
import './Home.css'
import About from './About';

const Home = () => {
    const slides = [
        { url: './images/home3.jpg', title: `Every our product is special, because You are special` },
        { url: './images/home2.jpg', title: 'Stay cool with Oh My Style!' },
        { url: './images/home4.jpg', title: 'Work Hard, Purchase Harder' },
        { url: './images/home1.jpg', title: `Style is a never ending story, let's write it together!` },
    ]
    return (
        <div className='container'>
           
            <div className='image-slider'>
                <ImageSlider slides={slides} title={slides.title}/>
            </div>
<About/>
        </div>
    );
}

export default Home;