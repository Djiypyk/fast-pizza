import React, {FC} from 'react';
import styles from './footer.module.scss'

export const Footer: FC = () => {
    return (
        <div className={'wrapper'}>
            <div className={styles.footer}>
                <div>
                    <span>Наш интернет-магазин является сервисом, который максимально старается избежать раздражающего звонками клиентов дискомфорта.
                Поэтому наши работники не станут вас беспокоить по пустякам ни в коем случае.</span>
                </div>
                <div>
                    <span>Но если у вас возникли какие-либо вопросы, вы всегда можете сами связаться с нами по номеру телефона: +375(29)***-**-**</span>
                </div>

            </div>


        </div>
    );
};

