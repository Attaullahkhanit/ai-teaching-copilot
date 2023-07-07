import React, { useMemo } from 'react'
import Header from './Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { baseURL } from '../config';
import Paginationtable from './Paginationtable';
import SearchBarTable from './SearchBarTable';

function TableTest() {
        // const [comments, setComments] = useState([])
        
        // const headers = [
        //     {name: "Name", field: "name"},
        //     {name: "Email", field: "email"},
        //     {name: "Amount", field: "amount"},
        //     {name: "Expired", field: "expired"},
        //     {name: "Created At", field: "created_at"},
        //     ]
        // useEffect(() => {
        //     const getData = () => {
        //         fetch(baseURL+"get_all_payments")
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log(data?.payment, 'mytabledata')
        //             setComments(data?.payment);
        //             console.log(data?.payment, 'mytabledata')
        //         })
        //         .catch((error) => console.log(error)); 
        //         };
        //         getData();
        // }, [])

        // const commentsData = useMemo (() => {
        //     let computedComments = comments;
        //     return computedComments;
        // }, [comments])

        // if (search) {
        //     computedComments = computedComments.filter(
        //         comment =>
        //             comment.name.toLowerCase().includes(search.toLowerCase()) ||
        //             comment.email.toLowerCase().includes(search.toLowerCase())
        //     );
        // }

        

    return (
        <>
            {/* <div className='container'>
                <div className='row'>
                    <div className='col mb-3 col-12 text-center'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <Paginationtable />
                            </div>
                        </div>

                        <table className='table table-striped'>
                            <Header headers={headers}/>
                            <tbody>
                                {commentsData.map(comment => (
                                    <tr>
                                        <td>{comment.name}</td>
                                        <td>{comment.email}</td>
                                        <td>${comment.amount}</td>
                                        <td></td>
                                        <td>{comment.created_at}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='row'>
                            <div className='col-md-12 d-flex flex-row-reverse'>
                                <SearchBarTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default TableTest



