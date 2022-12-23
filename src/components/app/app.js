import React from 'react';

// FIRST PAGE
import './app.scss';
import Header from '../firstPage/header/header.js';
import Main from '../firstPage/main/main.js';
import Footer from '../firstPage/footer/footer.js'; 
import Examp from '../firstPage/examp/examp.js';

// SECOND PAGE
import HeaderTwo from '../secondPage/headerTwo/headerTwo.js';
import MainSecond from '../secondPage/mainSecond/mainSecond.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: <Header newBlock={this.newBlock}></Header>,
      headerTwo: <HeaderTwo></HeaderTwo>,
      mainTwo: <MainSecond></MainSecond>,
      main: <Main></Main>,
      footer: <Footer></Footer>,
    }
  }

  newBlock = (e) => {
    e.preventDefault();
    this.setState(state => ({
      header: <Examp></Examp>,
    }))
  }

  render() {
    const {header, headerTwo, mainTwo, main, footer} = this.state;
    return (
      <div className='wrapper'>
        {header}
        {headerTwo}
        {mainTwo}
        {main}
        {footer}
      </div>
    );
  }
}

export default App;
