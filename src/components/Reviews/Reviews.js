import './Reviews.css';
import reviewer1 from "../../images/reviewer1.jpg"
import reviewer2 from "../../images/reviewer2.jpg"
import reviewer3 from "../../images/reviewer3.jpg"
import reviewer4 from "../../images/reviewer4.jpg"
import reviewer5 from "../../images/reviewer5.jpg"

export default function Reviews() {
    return (
        <section className='reviews'>
            <div className='review'>
                <img className='review_img' src={reviewer1} alt='1'></img>
                <h2>Екатерина Л.:</h2>
                <p>Очень довольна сотрудничеством! Персональный подход и внимательное отношение к клиенту. Все заказанные товары пришли вовремя, и качество превзошло ожидания!</p>
            </div>

            <div className='review'>
                <img className='review_img' src={reviewer2} alt='1'></img>
                <h2>Дмитрий К.:</h2>
                <p>Приятно работать с такими профессионалами. Все сделано быстро и качественно. В следующий раз снова обращусь к вам. Спасибо за отличную работу!</p>
            </div>

            <div className='review'>
                <img className='review_img' src={reviewer3} alt='1'></img>
                <h2>Иван М.:</h2>
                <p>Отличный сервис! Быстро реагируют на запросы, всегда предлагают оптимальные решения. Рад, что выбрал именно их для своего бизнеса. 100% доверие!</p>
            </div>

            <div className='review'>
                <img className='review_img' src={reviewer4} alt='1'></img>
                <h2>Алексей П.:</h2>
                <p>Сотрудничаю с этой компанией уже второй год, и они всегда на высоте! Продукция высокого качества, доставка в срок. Рекомендую всем, кто ценит надежность!</p>
            </div>
        </section>
    )
}