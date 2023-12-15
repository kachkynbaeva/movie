import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {store} from './redux/store';
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
       <ThemeProvider theme={theme}>
       <App />
       </ThemeProvider>
   </Provider>


);

