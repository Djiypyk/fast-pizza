import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {FC} from "react";
import {PATH} from "../../App";

const FullPizzas: FC = () => {
    const params = useParams()
    const [pizza, setPizza] = useState<{ imageUrl: string, title: string, price: number }>()
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
            <Link to={PATH.home}>
                <button className="button button--outline button--add">
                    <span> Назад </span>
                </button>
            </Link>
        </div>
    )
}

export default FullPizzas

