import React from 'react';
import PropTypes from 'prop-types'

export default function CategoryProducts({ children }) {
    return (
        <div className="category__content">
            { children }
        </div>
    )
}

CategoryProducts.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}