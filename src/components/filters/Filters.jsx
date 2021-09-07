import React from 'react'
import styles from './Filters.module.css'

export default function Filters() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.sortFilter}>
                    <b>Сортировать</b>
                    <br/>
                    <br/>
                    <div>
                        <input type="radio" checked={true}/> - по возрастанию цены
                    </div>
                    <div>
                        <input type="radio" /> - по убыванию цены
                    </div>
                    <div>
                        <input type="radio" /> - по времени в пути
                    </div>
                </div>
                <div className={styles.sortFilter}>
                    <b>Фильтровать</b>
                    <br/>
                    <br/>
                    <div>
                        <input type="checkbox" /> - 1 пересадка
                    </div>
                    <div>
                        <input type="checkbox" /> - без пересадок
                    </div>
                </div>
                <div className={styles.sortFilter}>
                    <b>Цена</b>
                    <br/>
                    <br/>
                    <div>
                        От <input type="text" />
                    </div>
                    <br/>
                    <div>
                        До <input type="text" />
                    </div>
                </div>
                <div className={styles.sortFilter}>
                    <b>Авиакомпании</b>
                    <br/>
                    <br/>
                    <div>
                        <input type="checkbox" /> - Аэрофлот
                    </div>
                    <div>
                        <input type="checkbox" /> - Россия
                    </div>
                    <div>
                        <input type="checkbox" /> - Аэрофлот
                    </div>
                    <div>
                        <input type="checkbox" /> - Россия
                    </div>
                    <div>
                        <input type="checkbox" /> - Аэрофлот
                    </div>
                    <div>
                        <input type="checkbox" /> - Россия
                    </div>
                    <div>
                        <input type="checkbox" /> - Аэрофлот
                    </div>
                    <div>
                        <input type="checkbox" /> - Россия
                    </div>
                </div>
            </div>
        </div>
    )
}
