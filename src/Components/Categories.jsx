import React, {useState} from "react";

export function Categories() {
    const [activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const onClickCategory = (number) => {
        setActiveIndex(number)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((p, i) => <li key={i} onClick={() => onClickCategory(i)}
                                              className={activeIndex === i ? 'active' : ''}>{p}
                </li>)}
            </ul>
        </div>
    )
}