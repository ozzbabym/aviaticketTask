import React from 'react'
import styles from './Ticket.module.css'
import db from '../../db/flights.json'

const flights = db.result.flights

export default function Ticket() {


    console.log(flights)
    return (
        <div className={styles.wrapper}>
            {flights.map(item=>{
                const price = item.flight.price.total.amount
                

                return <div className={styles.ticket}>
                        <div className={styles.ticketHead}>
                            <div>Image</div>
                            <div className={styles.ticketPrice}>
                                <div className={styles.Price}>{price} p</div>
                                <div className={styles.onePerson}>стоимость для одного взрослого пассажира</div>
                            </div>
                        </div>
                        <div className={styles.aviaRace}>
                            <div>
                                Москва, ШЕРЕМЕТЬЕВО <span className={styles.blueText}>(SVO)</span> → ЛОНДОН, Лондон, Хитроу <span className={styles.blueText}>(LHR)</span>
                            </div>
                            <hr/>
                            <div className={styles.timeTicket}>
                                <div>20:40 <span className={styles.blueText}>19 авг, ср</span></div>
                                <div> 23ч 35 мин</div>
                                <div>20:40 <span className={styles.blueText}>19 авг, ср</span></div>
                            </div>
                            <div className={styles.replace}>
                                <div className={styles.replaceColor}>1 пересадка</div>
                            </div>
                            <div>
                                Рейс выполняет: LOT Polish Aitlines
                            </div>
                        </div>
                        <div className={styles.lineBlue}></div>

                        <div className={styles.aviaRace}>
                            <div>
                                Москва, ШЕРЕМЕТЬЕВО <span className={styles.blueText}>(SVO)</span> → ЛОНДОН, Лондон, Хитроу <span className={styles.blueText}>(LHR)</span>
                            </div>
                            <hr/>
                            <div className={styles.timeTicket}>
                                <div>20:40 <span className={styles.blueText}>19 авг, ср</span></div>
                                <div> 23ч 35 мин</div>
                                <div>20:40 <span className={styles.blueText}>19 авг, ср</span></div>
                            </div>
                            <div className={styles.replace}>
                                <div className={styles.replaceColor}>1 пересадка</div>
                            </div>
                            <div>
                                Рейс выполняет: LOT Polish Aitlines
                            </div>
                        </div>
                        <div className={styles.ticketFooter}>
                            <div>ВЫБРАТЬ</div>
                        </div>
                    </div>
            })}
        </div>
    )
}
