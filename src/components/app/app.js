import React from 'react';

// FIRST PAGE
import './app.scss';
import Header from '../firstPage/header/header.js';
import Main from '../firstPage/main/main.js';
import Footer from '../firstPage/footer/footer.js'; 


// SECOND PAGE
import HeaderTwo from '../secondPage/headerTwo/headerTwo.js';
import MainSecond from '../secondPage/mainSecond/mainSecond.js';
import FooterTwo from '../secondPage/footerTwo/footerTwo.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: <Header newBlock={this.newBlock}></Header>,
      main: <Main></Main>,
      footer: <Footer></Footer>,
      filter: 'first-page'
    }
  }

  newBlock = (e) => {
    e.preventDefault();
    this.setState(state => ({
      header: <HeaderTwo></HeaderTwo>,
      main: <MainSecond></MainSecond>,
      footer: <FooterTwo></FooterTwo>
    }))
  }

  nextPage = (items, filter) => {
    switch (filter) {
      case 'second-page':
        return this.setState(state => {
          header: <HeaderTwo></HeaderTwo>
        })
      case 'third-page':
        return this.setState(state => {
          main: <MainSecond></MainSecond>
        })
      case 'third-page':
        return this.setState(state => {
          footer: <FooterTwo></FooterTwo>
        })
    }
  }

  render() {
    const {header, headerTwo, mainTwo, footerTwo, main, footer} = this.state;
    return (
      <div className='wrapper'>
        {header}
        {main}
        {footer}
      </div>
    );
  }
}

export default App;
