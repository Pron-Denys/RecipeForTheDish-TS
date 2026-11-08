import {Component} from "react"
import "./CardsStyle.css"

class Card2Component extends Component {
    render() {
        return (
            <div className="card2">
                <table>
                    <tr>
                        <th>Крок 1</th>
                    </tr>
                    <tr>
                        <td>Зварити бульйон (1–1.5 год)</td>
                    </tr>
                    <tr>
                        <th>Крок 2</th>
                    </tr>
                    <tr>
                        <td>Кинути картоплю в бульйон, варити 10 хв</td>
                    </tr>
                    <tr>
                        <th>Крок 3</th>
                    </tr>
                    <tr>
                        <td>Додати капусту до картоплі, варити 5 хв</td>
                    </tr>
                    <tr>
                        <th>Крок 4</th>
                    </tr>
                    <tr>
                        <td>Буряк тушкувати окремо з олією, оцтом (1 ст. л.) і цукром (1 ч. л.).</td>
                    </tr>
                    <tr>
                        <th>Крок 5</th>
                    </tr>
                    <tr>
                        <td>Обсмажити цибулю з морквою, додати томатну пасту (2–3 ст. л.).</td>
                    </tr>
                    <tr>
                        <th>Крок 6</th>
                    </tr>
                    <tr>
                        <td>Додати в каструлю буряк, зажарку, м'ясо, часник і зелень. Посолити.</td>
                    </tr>
                    <tr>
                        <th>Крок 7</th>
                    </tr>
                    <tr>
                        <td>Вимкнути вогонь і дати постояти 20 хв. Подавати зі сметаною</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Card2Component;