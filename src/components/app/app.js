import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// FIRST PAGE
import './app.scss';
// import Header from '../firstPage/header/header.js';
// // import Main from '../firstPage/main/main.js';
// import AboutUs from '../firstPage/aboutUs/aboutUs.js';
// import OurBest from '../firstPage/ourBest/ourBest.js';
import Footer from '../firstPage/footer/footer.js'; 


// // SECOND PAGE
// import HeaderTwo from '../secondPage/headerTwo/headerTwo.js';
// // import MainSecond from '../secondPage/mainSecond/mainSecond.js';
// import OurBeans from '../secondPage/ourBeans/ourBeans.js';
// import Filter from '../secondPage/filter/filter.js';
// import FooterTwo from '../secondPage/footerTwo/footerTwo.js';

import {OnePage, TwoPage} from '../pages';


const App = () => {


    return (
      <Router>
        <div className='wrapper'>
          <main>
            <Routes>
              <Route path="/" element={<OnePage></OnePage>}/>
              <Route path="/ourCoffe" element={<TwoPage></TwoPage>}/>
            </Routes>      
          </main>
        <Footer></Footer>
        </div>
      </Router>
    );
}

export default App;
