import {Component} from "react";
import "./HeaderClassComponent.css"

class HeaderClassComponent extends Component {
    render() {
        return (
            <div className="header">
                <h1>Борщ український</h1>
                <p>Легендарна національна страва з насиченим буряковим смаком</p>
            </div>
        );
    }
}

export default HeaderClassComponent;