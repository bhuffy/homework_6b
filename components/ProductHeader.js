import React from 'react';
import PropTypes from 'prop-types'

export default function ProductHeader({ title }) {
    return (
        <h1 className="span-12 h2 mt-9 text-center c-white">{title}</h1>
    )
}

ProductHeader.propTypes = {
    title: PropTypes.string,
}