import React, {FC} from 'react';
import ReactPaginate from "react-paginate";
import styles from './paginator.module.scss'

type PropsPaginatorT = {
    onChangeCurrentPage: (e: number) => void
    currentPage: number
}

export const Paginator: FC<PropsPaginatorT> = ({onChangeCurrentPage, currentPage}) => (
    <div>
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={e => onChangeCurrentPage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage - 1}
        />
    </div>
)