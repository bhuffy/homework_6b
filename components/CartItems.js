import React from 'react';
import PropTypes from 'prop-types'

export default function CartItems({ children }) {
    return (
        <div className="cart__items">
            { children }
        </div>
    )
}

CartItems.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}