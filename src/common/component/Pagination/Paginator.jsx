import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './paginator.module.scss'

export const Paginator = ({onChangeCurrentPage}) => {
    return (
        <div>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={e => onChangeCurrentPage(e.selected)}
                pageRangeDisplayed={4}
                pageCount={3}
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

