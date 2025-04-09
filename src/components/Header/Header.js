import './Header.css';
import img from "../../images/logo-white.png"

export default function Header() {
    return (
        <header id="header">
            <div className="header">
                <div className='header_logo'>
                    <img className='header__link-logo' src={img} alt='Logo'/>
                    <a class="header__number" href="tel:+7 (800) 555-35-35">✆ 8 (800) 555-35-35</a>
                </div>
                <div className='header_title'>Тестирование возможностей</div>
            </div>
        </header>
    )
}