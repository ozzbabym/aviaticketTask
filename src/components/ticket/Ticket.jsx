import React from 'react'
import styles from './Ticket.module.css'


const  days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];


export default function Ticket({flights}) {
    const [flightsList, setFlightsList] = React.useState([flights[0], flights[1]])

    React.useEffect(() => {
        if(flights[0]){
            setFlightsList([flights[0], flights[1]])
        }
    }, [flights])

    console.log(flightsList)
    return (
        <div className={styles.wrapper}>
            {flightsList && flightsList.map((item, index)=>{
                const price = item.flight.price.total.amount
                const carrier = item.flight.carrier.caption
                const replace = item.flight.legs
                
                const dataTime = (time) => {
                    let countDate = time.split("T")[0].split('-')[2]
                    let [a, b] = time.split("T")[1].split(":")
                    let weekData = days[new Date(time.split("T")[0]).getDay()]
                    let month = new Date(time.split("T")[0]).toLocaleString('default', { month: 'long' }).substring(0,3)
                    return [`${a}:${b}`, countDate, month, weekData]
                }
                const getTimeFromMins = (mins) => {
                    let hours = Math.trunc(mins/60);
                    let minutes = mins % 60;
                    return hours + 'ч'+ ' ' + minutes + 'мин';
                };
                

               
                return <div key={index} className={styles.ticket}>
                        <div className={styles.ticketHead}>
                            <div>{carrier}</div>
                            <div className={styles.ticketPrice}>
                                <div className={styles.Price}>{price} p</div>
                                <div className={styles.onePerson}>стоимость для одного взрослого пассажира</div>
                            </div>
                        </div>
                        <div className={styles.aviaRace}>
                            {replace[0].segments.length>1?
                                <div>
                                    {replace[0].segments[0].departureCity.caption}, {replace[0].segments[0].departureAirport.caption} <span className={styles.blueText}>({replace[0].segments[0].departureAirport.uid})</span> → {replace[0].segments[1].arrivalCity ?replace[0].segments[1].arrivalCity.caption+",":""} {replace[0].segments[1].arrivalAirport.caption} <span className={styles.blueText}>({replace[0].segments[1].arrivalAirport.uid})</span>
                                </div>
                                :
                                <div>
                                    {replace[0].segments[0].departureCity.caption}, {replace[0].segments[0].departureAirport.caption} <span className={styles.blueText}>({replace[0].segments[0].departureAirport.uid})</span> → {replace[0].segments[0].arrivalCity.caption}, {replace[0].segments[0].arrivalAirport.caption} <span className={styles.blueText}>({replace[0].segments[0].arrivalAirport.uid})</span>
                                </div>
                            }
                            <hr/>
                            {replace[0].segments.length>1?
                            <div className={styles.timeTicket}>
                                <div>{dataTime(replace[0].segments[0].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[0].segments[0].departureDate)[1]} {dataTime(replace[0].segments[0].departureDate)[2]}, {dataTime(replace[0].segments[0].departureDate)[3]}</span></div>
                                <div> {getTimeFromMins(replace[0].duration)} </div>
                                <div>{dataTime(replace[0].segments[1].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[0].segments[1].departureDate)[1]} {dataTime(replace[0].segments[1].departureDate)[2]}, {dataTime(replace[0].segments[1].departureDate)[3]}</span></div>
                            </div>
                            :
                            <div className={styles.timeTicket}>
                                 <div>{dataTime(replace[0].segments[0].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[0].segments[0].departureDate)[1]} {dataTime(replace[0].segments[0].departureDate)[2]}, {dataTime(replace[0].segments[0].departureDate)[3]}</span></div>
                                <div> {getTimeFromMins(replace[0].duration)}</div>
                                <div>{dataTime(replace[0].segments[0].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[0].segments[0].departureDate)[1]} {dataTime(replace[0].segments[0].departureDate)[2]}, {dataTime(replace[0].segments[0].departureDate)[3]}</span></div>
                            </div>
                            }
                            <div className={styles.replace}>
                                <div className={styles.replaceColor}>
                                    {replace[0].segments.length>1
                                    ?"1 пересадка"
                                    :""
                                    }
                                </div>
                            </div>
                            <div>
                                Рейс выполняет: LOT Polish Aitlines
                            </div>
                        </div>
                        <div className={styles.lineBlue}></div>

                        <div className={styles.aviaRace}>
                            {replace[1].segments.length>1?
                                <div>
                                    {replace[1].segments[0].departureCity ? replace[1].segments[0].departureCity.caption+"," : ""} {replace[1].segments[0].departureAirport.caption} <span className={styles.blueText}>({replace[1].segments[0].departureAirport.uid})</span> → {replace[1].segments[1].arrivalCity ?replace[1].segments[1].arrivalCity.caption+",":""} {replace[1].segments[1].arrivalAirport.caption} <span className={styles.blueText}>({replace[1].segments[1].arrivalAirport.uid})</span>
                                </div>
                                :
                                <div>
                                    {replace[1].segments[0].departureCity.caption}, {replace[1].segments[0].departureAirport.caption} <span className={styles.blueText}>({replace[1].segments[0].departureAirport.uid})</span> → {replace[1].segments[0].arrivalCity.caption}, {replace[1].segments[0].arrivalAirport.caption} <span className={styles.blueText}>({replace[1].segments[0].arrivalAirport.uid})</span>
                                </div>
                            }
                            <hr/>
                            {replace[1].segments.length>1?
                            <div className={styles.timeTicket}>
                                <div>{dataTime(replace[1].segments[0].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[1].segments[0].departureDate)[1]} {dataTime(replace[1].segments[0].departureDate)[2]}, {dataTime(replace[1].segments[0].departureDate)[3]}</span></div>
                                <div> {getTimeFromMins(replace[1].duration)}</div>
                                <div>{dataTime(replace[1].segments[1].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[1].segments[1].departureDate)[1]} {dataTime(replace[1].segments[1].departureDate)[2]}, {dataTime(replace[1].segments[1].departureDate)[3]}</span></div>
                            </div>
                            :
                            <div className={styles.timeTicket}>
                                 <div>{dataTime(replace[1].segments[0].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[1].segments[0].departureDate)[1]} {dataTime(replace[1].segments[0].departureDate)[2]}, {dataTime(replace[1].segments[0].departureDate)[3]}</span></div>
                                <div> {getTimeFromMins(replace[1].duration)}</div>
                                <div>{dataTime(replace[1].segments[0].departureDate)[0]} <span className={styles.blueText}>{dataTime(replace[1].segments[0].departureDate)[1]} {dataTime(replace[1].segments[0].departureDate)[2]}, {dataTime(replace[1].segments[0].departureDate)[3]}</span></div>
                            </div>
                            }
                            <div className={styles.replace}>
                                <div className={styles.replaceColor}>
                                {replace[1].segments.length>1
                                    ?"1 пересадка"
                                    :""
                                    }
                                </div>
                            </div>
                            <div>
                                Рейс выполняет: {carrier}
                            </div>
                        </div>
                        <div className={styles.ticketFooter}>
                            <div>ВЫБРАТЬ</div>
                        </div>
                    </div>
            })}
            <div className={styles.buttonMore}>
                <button onClick={()=>setFlightsList(flights)}>Показать еще</button>
            </div>
        </div>
    )
}
