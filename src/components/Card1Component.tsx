import {Component} from "react";
import "./CardsStyle.css";

class Card1Component extends Component {
    render() {
        return (
            <div className="card">
                <table>
                    <tr>
                        <th>Інгредієнти</th>
                        <th>Кількість / Вага</th>
                    </tr>
                    <tr>
                        <td>М'ясо</td>
                        <td>500–700 г</td>
                    </tr>
                    <tr>
                        <td>Вода</td>
                        <td>3–3,5 л</td>
                    </tr>
                    <tr>
                        <td>Буряк</td>
                        <td>2 шт</td>
                    </tr>
                    <tr>
                        <td>Капуста білокачанна</td>
                        <td>300–400 г</td>
                    </tr>
                    <tr>
                        <td>Картопля</td>
                        <td>4–5 шт.</td>
                    </tr>
                    <tr>
                        <td>Морква</td>
                        <td>1 шт.</td>
                    </tr>
                    <tr>
                        <td>Цибуля ріпчаста</td>
                        <td>1–2 шт.</td>
                    </tr>
                    <tr>
                        <td>Томатна паста</td>
                        <td>2–3 ст. л.</td>
                    </tr>
                    <tr>
                        <td>Оцет (9%) або лимонний сік</td>
                        <td>1 ст. л.</td>
                    </tr>
                    <tr>
                        <td>Цукор</td>
                        <td>1 ч. л.</td>
                    </tr>
                    <tr>
                        <td>Олія</td>
                        <td>2–3 ст. л.</td>
                    </tr>
                    <tr>
                        <td>Часник</td>
                        <td>3–4 зубчики</td>
                    </tr>
                    <tr>
                        <td>Перець чорний горошком</td>
                        <td>5–7 шт.</td>
                    </tr>
                    <tr>
                        <td>Сіль, мелений перець</td>
                        <td>За смаком</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Card1Component;