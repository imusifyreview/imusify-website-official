import React from 'react';
import Link from 'next/link'

const Categories = ({}) => (
    <div>
        <h5 className="blog-title">categories</h5>
        <div className="sidebar-container borders">
            <ul className="sidebar-list">
                <li className="d-flex">
                    <Link href="#"> 
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            Crypto Music Projects
                        </a>
                    </Link>
                </li>
                <li className="d-flex">
                    <Link href="#"> 
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            Other Crypto Projects
                        </a>
                    </Link>
                </li>
                <li className="d-flex">
                    <Link href="#"> 
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            Market And Analysis
                        </a>
                    </Link>
                </li>
                <li className="d-flex">
                    <Link href="#"> 
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            All Things Music
                        </a>
                    </Link>
                </li>
                <li className="d-flex">
                    <Link href="#"> 
                        <a>
                            <i aria-hidden="true" className="fa fa-angle-right m-r-15"></i>
                            Blockchain Education
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);

export default Categories;
