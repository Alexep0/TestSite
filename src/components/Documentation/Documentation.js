import './Documentation.css';
import { useState, useEffect } from 'react';
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import img4 from "../../images/4.jpg"
import img5 from "../../images/5.jpg"

export default function Documentation() {

    return (
        <section className='documentation'>
            <h1>Благодарственные письма и дипломы</h1>
            <ul className='documentation_table'>
                <img className='documentation_item' src={img1} alt='img1'/>
                <img className='documentation_item' src={img2} alt='img2'/>
                <img className='documentation_item'src={img3} alt='img3'/>
                <img className='documentation_item' src={img4} alt='img4'/>
                <img className='documentation_item' src={img5} alt='img5'/>
            </ul>
        </section>
    )
}