import React, { Component } from "react";
import { Button } from '@mui/material';

import "./HomePage.css";

import {
    BrowserRouter,
    Route,
    Link,
    Router,
    Routes
  } from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return (
            <div className='wrap'>
                <h1 className="caption">
                    Прогнозирование длительности движения вагонов
                </h1>

                <div className='buttons'>
                    <Button
                        href="/operator"
                        sx={{
                            color: '#ffffff91',
                            fontSize: 20,
                            fontFamily: "Montserrat",
                        }}>
                    Оператор
                    </Button>
                    <Button
                        href="/merchant"
                        sx={{
                            color: '#ffffff91',
                            fontSize: 20,
                            fontFamily: "Montserrat"
                        }}>
                    Коммерс
                    </Button>
                </div>
            </div> 
        );
    }
}