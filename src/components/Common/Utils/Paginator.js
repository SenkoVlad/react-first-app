import React from 'react';
import { useState } from 'react';
import css from './Paginator.module.css';

export const Paginator = React.memo(({ totalItemsCount, pageSize, currentPage, setCurrentPage, paginatorPartSize }) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let partCount = Math.ceil(pageCount / paginatorPartSize);
    let [partNumber, setPartNumber] = useState(1);
    let leftItemNumber = (partNumber - 1) * paginatorPartSize + 1;
    let rightItemNumber = partNumber * paginatorPartSize;

    return (
        <div>
            {partNumber > 1 && <button onClick={() => setPartNumber(partNumber - 1)}>Prev</button>}

            {pages.filter(pageNumber => pageNumber >= leftItemNumber && pageNumber <= rightItemNumber)
                .map(page => {
                    return <span className={page === currentPage ? css.currentPage : css.page}
                                onClick={(e) => setCurrentPage(page)}
                                key={page}>
                                {page}
                            </span>
                })}

            {partNumber < partCount && <button onClick={() => setPartNumber(partNumber + 1)}>Next</button>}
        </div>
    );
});