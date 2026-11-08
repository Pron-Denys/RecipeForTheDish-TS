import {Component} from "react";
import "./PhotoClassComponent.css";

class PhotoClassComponent extends Component {
    render() {
        return (
            <div className="cardPhoto">
                <div className="photo">
                    <img src="https://zira.uz/wp-content/uploads/2018/11/borw.jpg" width="400px" />
                </div>
            </div>
        );
    }
}

export default PhotoClassComponent;