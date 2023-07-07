import React from 'react'

function Header({headers}) {
    return (
        <>
            <thead>
                <tr>
                    {headers.map(hdata=> (
                        <th key={hdata.field}>{hdata.name}</th>
                    ))
                    }         
                </tr>
            </thead>
        </>
    )
}

export default Header