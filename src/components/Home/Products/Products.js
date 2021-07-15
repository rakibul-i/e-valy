import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../../fakeData/index'
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const pages = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            )
        } else {
            return (null)
        }

    })


    useEffect(() => {
        const fakedata = fakeData;
        setProducts(fakedata)
    }, []);

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>
    }


    const handleLoadMore = () => {
        setItemsPerPage(itemsPerPage + 6);
    }
    return (
        <div className="Products__container">
            <div className="w-75 mx-auto">
                <div className="d-flex my-2 p-y-2 justify-content-between align-items-center">
                    <h3 className="my-3 pt-2">Products</h3>
                </div>
                <div className="row py-3">
                    {
                        currentItems.map(pd => <Product pd={pd} key={pd.key} ></Product>)
                    }
                </div>
                <div className="pagination">
                    <ul className="pageNumbers">
                        <li>
                            <button
                                onClick={handlePrevbtn}
                                disabled={currentPage === pages[0] ? true : false}
                            >
                                Prev
                            </button>
                        </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        <li>
                            <button
                                onClick={handleNextbtn}
                                disabled={currentPage === pages[pages.length - 1] ? true : false}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                    <button onClick={handleLoadMore} className="loadMore">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default Products;