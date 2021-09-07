import styles from './App.module.css'
import Ticket from './components/ticket/Ticket';
import Filters from './components/filters/Filters';

function App() {
  return (
    <div className={styles.wrapper}>
        <Filters />
        <Ticket  />
    </div>
  );
}

export default App;
