import './Slide.css';
import Banner from "./Banner/Banner";

export default function Slide() {
    return (
        <section className='slide'>
            <div className='slide_tool'>
                <Banner />
            </div>
            <div className='slide_form_input'>
                <form form onSubmit autoComplete="false" className='slideForm' id='slideForm'>
                    <p>Заполните форму, чтобы получить доступ к эксклюзивным предложениям!</p>

                    <div className='formInputBox'>
                        <label className=''>Ваша почта</label>
                        <input required className='formInput' name='email' type='email' placeholder='forExamle@mail.ru' autoComplete="false" />
                    </div>

                    <div className='formInputBox'>
                        <label className=''>Номер телефона</label>
                        <input required className='formInput' name='phone' type='tel' placeholder='+7(000)000-00-00' autoComplete="false" />
                    </div>
                </form>
                <button className='submitButton' type='submit'>Свяжитесь с нами</button>
            </div>
        </section>
    )
}