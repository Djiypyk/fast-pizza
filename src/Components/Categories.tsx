import React, {FC} from "react";

type PropsCategoryT = {
    value: number
    onChangeCategory: (id: number) => void
}

export const Categories: FC<PropsCategoryT> = React.memo(({value, onChangeCategory}) => {

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
})