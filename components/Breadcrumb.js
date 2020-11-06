import React from 'react';
import PropTypes from 'prop-types'

export default function Breadcrumb({children}) {
    return (
        <>
            <p className="mt-5 span-12">{ children }</p>
        </>
    )
}

Breadcrumb.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}