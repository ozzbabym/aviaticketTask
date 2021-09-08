import React from 'react'
import styles from './Filters.module.css'

export default function Filters({dispatch, state}) {
    const [highPrice, sethighPrice] = React.useState(true)
    const [lowPrice, setlowPrice] = React.useState(false)
    const [timeWay, settimeWay] = React.useState(false)

    const [notSeat, setnotSeat] = React.useState(false)
    const [oneSeat, setoneSeat] = React.useState(false)

    const [priceFrom, setpriceFrom] = React.useState('')
    const [priceTo, setpriceTo] = React.useState(200000)

    const [changeAvia, setChangeAvia] = React.useState()

    const newArrayArrier = Array.from(new Set(state.flights.map(item=>item.flight.carrier.caption)))
    
    React.useEffect(() => {
        if(highPrice){
            setlowPrice(false)
            settimeWay(false)
            dispatch({type: "HIGH_PRICE"})
        }
        if(oneSeat){
            dispatch({type: 'ONE_SEAT'})
        }
    }, [highPrice, notSeat, oneSeat, priceFrom, priceTo])

    React.useEffect(() => {
        if(lowPrice){
            sethighPrice(false)
            settimeWay(false)
            dispatch({type: "LOW_PRICE"})
        }
        if(oneSeat){
            dispatch({type: 'ONE_SEAT'})
        }
    }, [lowPrice, notSeat, oneSeat, priceFrom, priceTo])

    React.useEffect(() => {
        if(timeWay){
            sethighPrice(false)
            setlowPrice(false)
            dispatch({type: "TIME_WAY"})
        }
        if(oneSeat){
            dispatch({type: 'ONE_SEAT'})
        }
    }, [timeWay, notSeat, oneSeat, priceFrom, priceTo])

    React.useEffect(() => {
        if(notSeat){
            dispatch({type: 'NOT_SEAT'})
        }else{
            if(highPrice){
                setlowPrice(false)
                settimeWay(false)
                dispatch({type: "HIGH_PRICE"})
            }
            if(lowPrice){
                sethighPrice(false)
                settimeWay(false)
                dispatch({type: "LOW_PRICE"})
            }
            if(timeWay){
                sethighPrice(false)
                setlowPrice(false)
                dispatch({type: "TIME_WAY"})
            }
        }
        dispatch({type: "FROM_PRICE", count: {priceFrom, priceTo}})
        dispatch({type: "TO_PRICE", count: {priceFrom, priceTo}})
    }, [notSeat, priceFrom, priceTo,highPrice,lowPrice,timeWay,changeAvia])

    React.useEffect(() => {
        if(oneSeat){
            dispatch({type: 'ONE_SEAT'})
        }else{
            if(highPrice){
                setlowPrice(false)
                settimeWay(false)
                dispatch({type: "HIGH_PRICE"})
            }
            if(lowPrice){
                sethighPrice(false)
                settimeWay(false)
                dispatch({type: "LOW_PRICE"})
            }
            if(timeWay){
                sethighPrice(false)
                setlowPrice(false)
                dispatch({type: "TIME_WAY"})
            }
        }
        dispatch({type: "FROM_PRICE", count: {priceFrom, priceTo}})
        dispatch({type: "TO_PRICE", count: {priceFrom, priceTo}})
    }, [oneSeat, priceFrom, priceTo, highPrice,lowPrice,timeWay, changeAvia])
    
    React.useEffect(() => {
        dispatch({type: "FROM_PRICE", count: {priceFrom, priceTo}})
    }, [priceFrom, highPrice,lowPrice,timeWay, priceTo, changeAvia])

    React.useEffect(() => {
        dispatch({type: "TO_PRICE", count: {priceFrom, priceTo}})
    }, [priceTo, priceFrom, highPrice,lowPrice,timeWay, changeAvia])

    React.useEffect(() => {
        console.log(changeAvia)
        if(changeAvia && changeAvia[Object.keys(changeAvia)[0]]){
            dispatch({type: "CAPTION", caption: Object.keys(changeAvia)[0]})
        }
        else{
            dispatch({type: "HIGH_PRICE"})
            dispatch({type: "FROM_PRICE", count: {priceFrom, priceTo}})
            dispatch({type: "TO_PRICE", count: {priceFrom, priceTo}})
        }
    }, [changeAvia])


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.sortFilter}>
                    <b>Сортировать</b>
                    <br/>
                    <br/>
                    <div>
                        <input id="high" type="radio" checked={highPrice} onChange={(e)=>sethighPrice(true)}/> - по возрастанию цены
                    </div>
                    <div>
                        <input id="low" type="radio" checked={lowPrice} onChange={(e)=>setlowPrice(true)}/> - по убыванию цены
                    </div>
                    <div>
                        <input id="timeWay" type="radio" checked={timeWay} onChange={(e)=>settimeWay(true)}/> - по времени в пути
                    </div>
                </div>
                <div className={styles.sortFilter}>
                    <b>Фильтровать</b>
                    <br/>
                    <br/>
                    <div>
                        <input type="checkbox" onChange={e=>setoneSeat(e.target.checked)}/> - 1 пересадка
                    </div>
                    <div>
                        <input type="checkbox" onChange={e=>setnotSeat(e.target.checked)} /> - без пересадок
                    </div>
                </div>
                <div className={styles.sortFilter}>
                    <b>Цена</b>
                    <br/>
                    <br/>
                    <div>
                        От <input type="text" onChange={e=>setpriceFrom(e.target.value)} value={priceFrom}/>
                    </div>
                    <br/>
                    <div>
                        До <input type="text" onChange={e=>setpriceTo(e.target.value)} value={priceTo}/>
                    </div>
                </div>
                <div className={styles.sortFilter}>
                    <b>Авиакомпании</b>
                    <br/>
                    <br/>
                    {newArrayArrier.map(item=>{   
                        return <div key={item}>
                                    <input type="checkbox" onChange={e=>setChangeAvia({[e.target.value]: e.target.checked})} value={item}/> - {item}
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}
