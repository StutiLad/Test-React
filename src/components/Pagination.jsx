import React, { useState } from 'react'

const Pagination = (props) => {

    const eventDisable = {
        pointerEvent: 'none',
        
    }


    const eventEnable = {
        pointerEvent: 'none'
    }

    const count = props.newEmployee.length
    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // // No of Records to be displayed on each page   
    const recordsPerPage = props.entry;
    

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = props.newEmployee.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(count / recordsPerPage)
    let pageNumbers = 0;
    if (nPages >= 2) {
        pageNumbers = Array.from(Array(nPages + 1).keys()).slice(1)
    } else {
        pageNumbers = 0;
    }

    console.log('outside', currentPage)
    // console.log('pagination :', props.entry)
    // console.log('pages:', nPages, 'currentRecords: ', currentRecords)
    // console.log('pageNumbers: ', pageNumbers)
    // console.log("  count: ", count, "recordsPerPage: ", recordsPerPage)
    console.log('-------------------------')
    // const pageNumbers = 10;

    const nextPage = () => {
        if (currentPage !== nPages)
            setCurrentPage(currentPage + 1)

        console.log('currentPages', currentPage )
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    const visible = {
        visiblity: 'visible'
    }
    const hidden = {
        visibility: 'hidden',
    }


    return (
        <div className='d-flex justify-content-center' >
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" onClick={prevPage} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                    {pageNumbers.map(pgNumber => (
                        <li key={pgNumber}
                            className={`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                            <a onClick={() => setCurrentPage(pgNumber)}
                                className='page-link' >
                                {pgNumber}
                                {/* {currentRecords} */}
                                {/* {console.log('pagenumer: ', pgNumber, 'currentRecords', currentRecords)} */}
                            </a>
                        </li>
                    ))}

                    {/* <li className="page-item">
                        <a className="page-link" >
                            1
                        </a>
                    </li> */}
                    <li className="page-item">
                        <a className="page-link" onClick={nextPage} aria-label="Next"  >
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
    
}

export default Pagination