import React, { useEffect, useState } from "react";

const Pagination = ({ list, onClick }) => {
    // console.log(list);

    const [previousList, setPreviousList] = useState(0);
    const [allPageNumbers, setAllPageNumbers] = useState([]);
    let currentList = list.numberOfListNumbersPerPage + previousList;
    // let nextList = list.numberOfListNumbersPerPage + currentList;

    let totalPages = Math.floor(list.numberOfAllPokemon / list.pokemonPerPage);

    if (list.numberOfAllPokemon % list.pokemonPerPage !== 0) {
        totalPages += 1;
    }

    useEffect(() => {
        const getAllPageNumbers = [];
        for (let i = 1; i < totalPages + 1; i++) {
            getAllPageNumbers.push(i);
        }
        return setAllPageNumbers(getAllPageNumbers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goToPreviousPage = (e) => {
        e.preventDefault();
        if (list.currentPage === 1) {
            return alert("this is the first page");
        }
        onClick(list.currentPage - 1);
        if (list.currentPage - 1 === previousList) {
            setPreviousList(previousList - list.numberOfListNumbersPerPage);
        }
        return;
    };

    const goToNextPage = (e) => {
        e.preventDefault();
        if (list.currentPage === totalPages) {
            return alert("this is the last page");
        }
        onClick(list.currentPage + 1);
        if (list.currentPage === currentList) {
            setPreviousList(currentList.valueOf());
        }
        return;
    };

    const goToThisPage = (e, pageNumber) => {
        e.preventDefault();

        if (list.currentPage === pageNumber) {
            return;
        }

        // handle click on the first 3 child
        // if the pageNumber less than 3 reset previousList to 0 else add 1 to previousList
        //
        // handle click on the last 2 child
        // if the pageNumber + 2 (last two child) was equal to totalPages than reset previousList to totalPages - list.numberOfListNumbersPerPage ( 129 - 5 = add 124 to previousList => show last 5 child)
        // setPreviousList(
        //     pageNumber - 3 < 0
        //         ? 0
        //             : pageNumber + 2 >= totalPages
        //             ? totalPages-list.numberOfListNumbersPerPage
        //         : pageNumber - 3
        // );

        return onClick(pageNumber);
    };

    function goToThePreviousList() {
        if (previousList <= 0) {
            return alert("this is first List");
        }
        // Handle if there are less number of children than required then reset the previousList to 0
        // the required number come from list.numberOfListNumbersPerPage
        // if (previousList <= list.numberOfListNumbersPerPage) {
        //     setTimeout(() => {
        //         setPreviousList(0);
        //     }, 1);
        // }
        return setPreviousList(previousList - list.numberOfListNumbersPerPage);
    }

    function goToTheNextList() {
        const selectedNumberInTheList = document.querySelector(
            `.last-number-in-the-list`
        );
        if (selectedNumberInTheList) {
            return alert("this is last List");
        }
        return setPreviousList(previousList + list.numberOfListNumbersPerPage);
    }

    const PagesNumbers = () => {
        return allPageNumbers.map((pageNumber) =>
            pageNumber > previousList && pageNumber <= currentList ? (
                <li key={pageNumber}>
                    <button
                        className={
                            (list.currentPage === pageNumber
                                ? `active`
                                : "pageFromPositionListPagesNumbers") +
                            (pageNumber === totalPages
                                ? " last-number-in-the-list"
                                : "")
                        }
                        onClick={(e) => {
                            goToThisPage(e, pageNumber);
                        }}
                    >
                        {pageNumber}
                    </button>
                </li>
            ) : null
        );
    };
    return (
        <section className="Pagination">
            {/* <h2 className="currentPage">{list.currentPage}</h2> */}
            <article className="positionListPagesNumbers">
                <ul>
                    <li>
                        <img
                            src="https://img.icons8.com/ios/1x/ellipsis.png"
                            alt="previous list pages"
                            className="btn-list-pages"
                            width={30}
                            onClick={goToThePreviousList}
                        />
                    </li>
                    {PagesNumbers()}
                    <li>
                        <img
                            src="https://img.icons8.com/ios/1x/ellipsis.png"
                            alt="next list pages"
                            className="btn-list-pages"
                            width={30}
                            onClick={goToTheNextList}
                        />
                    </li>
                </ul>
            </article>

            <img
                src="https://img.icons8.com/arcade/512/circled-left.png"
                alt="Previous page"
                onClick={goToPreviousPage}
                className="btn-previous-page"
                // className="Previous-page"
                width={50}
            />
            <img
                src="https://img.icons8.com/arcade/512/circled-right.png"
                alt="next page"
                onClick={goToNextPage}
                className="btn-next-page"
                // className=""
                width={50}
            />
        </section>
    );
};

export default Pagination;
