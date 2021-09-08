import db from '../db/flights.json'
const flights = db.result.flights


export const reducer = (state = {}, action) => {
    switch (action.type) {
        
        case 'HIGH_PRICE': {
            return {...state, flights: flights.sort((prev,next) =>parseInt(prev.flight.price.total.amount) - parseInt(next.flight.price.total.amount))}
        }
        case 'LOW_PRICE': {
            return {...state, flights: flights.sort((prev,next) =>parseInt(prev.flight.price.total.amount) - parseInt(next.flight.price.total.amount)).reverse()}
        }
        case 'TIME_WAY': {
            return {...state, flights: flights.sort((prev,next) =>((prev.flight.legs[0].duration + prev.flight.legs[1].duration)) - (next.flight.legs[0].duration+ next.flight.legs[1].duration))}
        }
        case 'NOT_SEAT':{
            return {...state, flights: state.flights.filter(item=>item.flight.legs[0].segments.length===1 && item.flight.legs[1].segments.length===1 )}
        }
        case 'ONE_SEAT':{
            return {...state, flights: state.flights.filter(item=>((item.flight.legs[0].segments.length===1 || item.flight.legs[1].segments.length===1) && (item.flight.legs[0].segments.length !== item.flight.legs[1].segments.length) ))}
        }
        case 'FROM_PRICE':{
            return {...state, flights: state.flights.filter(item=>(parseInt(item.flight.price.total.amount) > action.count.priceFrom))}
        }
        case 'TO_PRICE':{
            return {...state, flights: state.flights.filter(item=>(parseInt(item.flight.price.total.amount) < action.count.priceTo))}
        }
        case 'CAPTION':{
            return {...state, flights: state.flights.filter(item=>item.flight.carrier.caption===action.caption)}
        }
        default: {
            return {...state}
        }
    }
}