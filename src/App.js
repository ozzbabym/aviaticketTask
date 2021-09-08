import React from 'react'
import styles from './App.module.css'
import Ticket from './components/ticket/Ticket';
import Filters from './components/filters/Filters';
import db from './db/flights.json'
import {reducer} from './reducer/reducer'

const flights = db.result.flights

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    flights: flights
  })


  return (
    <div className={styles.wrapper}>
        <Filters dispatch={dispatch} state={state}/>
        <Ticket flights={state.flights}/>
    </div>
  );
}

export default App;
