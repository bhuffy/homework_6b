import React from 'react';

export default function CategorySidebar() {
    return (
        <>
            <div className="category__sidebar">
                <h2 className="mt-5">Filter</h2>
                <div className="mb-6" id="sizes">
                    <label className="h3">Size</label>
                    <div className="checkbox-list">
                        <label className="checkbox-container">Tiny
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Small
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Medium
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Large
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>

                <div className="mb-6" id="colors">
                    <label className="h3 mb-5">Color</label>
                    <div className="checkbox-list">
                        <label className="checkbox-container">Strawberry
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Blackberry
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Blackberry
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Crazyberry
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Fire Orange
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Lightberry
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">Teal
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}