import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link'
import Checkmark from './Checkmark'

export default function CategoryProduct({ src, alt, name, slug, price, colors }) {
    const [activeColor, setActiveColor] = useState(colors[0]);

    // handle color selection
    const handleColorSelect = (c) => {
        setActiveColor(c);
    }

    const colorOptions = colors.map((c) =>
        <span key={c} onClick={() => handleColorSelect(c)} className={`color-box color-box--${c}`}>
            {(activeColor == c) && <Checkmark />}
        </span>
    );

    return (
        <>
            <div className="my-5">
                <Link href={slug}>
                    <a className="c-off-black">
                        <img src={src} alt={alt} />
                        <h3 className="mb-1">{name}</h3>
                        <p className="mb-2">${price} • Strawberry</p>
                    </a>
                </Link>
                <div className="align-items-center">
                    {colorOptions}
                </div>
            </div>
        </>
    )
}

CategoryProduct.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    price: PropTypes.number,
    colors: PropTypes.array,
}
