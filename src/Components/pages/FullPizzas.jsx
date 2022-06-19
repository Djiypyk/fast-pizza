import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export const FullPizzas = () => {
        const params = useParams()
        const [pizza, setPizza] = useState()
        const navigate = useNavigate()
        useEffect(() => {
                async function fetchPizza() {
                    try {
                        const {data} = await axios.get("https://62a78e03bedc4ca6d7cad1f0.mockapi.io/items/" + params.id)
                        setPizza(data);
                    } catch
                        (error) {
                        alert('Ошибка при получении пиццы')
                        navigate('/')
                    }
                }
                fetchPizza()
            }, [params.id, navigate]
        )

        if (!pizza) {
            return (<div className={'container'}><h2>Загрузка</h2></div>)
        }

        return (
            <div className={'container'}>
                <img src={pizza.imageUrl} alt=""/>
                <h2>{pizza.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum eaque hic maxime modi molestias
                    nam neque nihil nulla numquam.</p>
                <h4>{pizza.price} руб.</h4>
            </div>
        )
            ;
    }
;

