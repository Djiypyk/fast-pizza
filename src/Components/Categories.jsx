import React from "react";

export function Categories({value, onChangeCategory}) {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((p, i) => <li
                    key={i}
                    onClick={() => onChangeCategory(i)}
                    className={value === i ? 'active' : ''}>{p}
                </li>)}
            </ul>
        </div>
    )
}