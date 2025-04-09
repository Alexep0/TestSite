import './Banner.css';
import { useEffect, useState } from 'react';
import placeholder from '../../../images/Banner.placeholder.png';

export default function Banner() {
    const [slideIndex, setSlideIndex] = useState(0);

    const plusSlides = (n) => {
        setSlideIndex((prevIndex) => prevIndex + n < 0 ? 2 : (prevIndex + n)%3);
    }

    const currentSlide = (n) => {
        setSlideIndex(n - 1);
    }

    useEffect(() => {
        //использовать plusSlides
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => prevIndex === 2 ? 0 : prevIndex + 1);
        }, 6000);

        return () => clearInterval(interval);
        
    }, []);



    return (
        <section className="banner">
            <div className="slideshow-container">
                <div className="mySlides fade" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
                    <div className="numbertext">1 / 3</div>
                    <img className='bannerImg' alt="плейсхолдер" src={placeholder}></img>
                </div>
                <div className="mySlides fade" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
                    <div className="numbertext">2 / 3</div>
                    <img className='bannerImg' alt="плейсхолдер" src={placeholder}></img>
                </div>
                <div className="mySlides fade" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
                    <div className="numbertext">3 / 3</div>
                    <img className='bannerImg' alt="плейсхолдер" src={placeholder}></img>
                </div>
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
            <div className='dots'>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </section>
    )
}