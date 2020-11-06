import React from 'react';
import PropTypes from 'prop-types'

export default function CategoryHeader({ title }) {
    return (
        <>
            <section className={`category-header category-header--${title}`}>
                <div className="category-header__content">
                    <h1 className="c-white mb-0">{title.toUpperCase()}</h1>
                </div>
            </section>
        </>
    )
}

CategoryHeader.propTypes = {
    title: PropTypes.string,
}
