import "./Paginate.scss";
import ReactPaginate from "react-paginate";
import Product from "../../types/product";
import React from "react";

type Props = {
    handleChange: Function;
    articlesPerPage: number;
    totalArticleCount: number;
    posts: Product[];
};

const Paginate = ({
    handleChange,
    articlesPerPage,
    totalArticleCount,
    posts,
}: Props) => {
    const pageCount = Math.ceil(totalArticleCount / articlesPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * articlesPerPage) % posts.length;
        handleChange({ activePage: event.selected, itemOffset: newOffset });
    };

    return (
        <div className="u-align--center ">
            {" "}
            {posts && posts.length > 0 ? (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            ) : (
                <></>
            )}
        </div>
    );
};

export default Paginate;
