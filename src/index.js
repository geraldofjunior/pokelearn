import React from 'react';
import ReactDOM from 'react-dom';

import Header from './page/common/header';
import App from './App';
import Footer from './page/common/footer';

ReactDOM.render(
    <div>
        <Header />
        <App />
        <Footer />
    </div>, document.getElementById('root'));