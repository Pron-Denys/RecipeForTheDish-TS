import { Component } from 'react'
import HeaderClassComponent from "./components/HeaderClassComponent"
import PhotoClassComponent from './components/PhotoClassComponent';
import Card1Component from './components/Card1Component';
import Card2Component from './components/Card2Component';
import './App.css'

class App extends Component {
  render() {
    return (
      <main>
        <div className="conteiner">
            <HeaderClassComponent />
            <PhotoClassComponent />
        </div>
        <div className="conteinerCards">
            <Card1Component />
            <Card2Component />
        </div>
    </main>
    );
  }
}

export default App
