import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header"
import Clock from "./Components/Clock"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.Fragment>

<td><Header/></td>

<td><Clock /></td>

</React.Fragment>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
