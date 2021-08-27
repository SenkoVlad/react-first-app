import css from './Paginator.module.css';

export const Paginator = ({ totalPageCount, pageSize, currentPage, setCurrentPage }) => {
    let pageCount = Math.ceil(totalPageCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(page => {
                return <span className={page === currentPage ? css.currentPage : ''} onClick={() => setCurrentPage(page)}>{page}</span>
            })}
        </div>
    );
}