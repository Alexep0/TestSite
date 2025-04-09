import './Stocks.css';
import CountdownTimer from './Timer/Timer';

export default function Stocks() {
    const targetDate = new Date('2025-04-10T00:00:00');
    return (
        <section className='stocks'>
            <p className='stocks_title'>"Не упустите шанс! Только до 10 Апреля — скидка 20% и подарок при оформлении заказа. Спешите, количество акционных товаров ограничено!"</p>
            <div className='timer_box'>
                <CountdownTimer targetDate={targetDate} />
            </div>
        </section>
    )
}