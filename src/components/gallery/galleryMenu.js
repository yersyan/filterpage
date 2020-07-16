import React from "react";
import {NavLink} from "react-router-dom";

export const GalleryMenu = ({categoryArray, setCategory}) => {

    return <nav className="galleryNav">
        <ul className="galleryMenu">
            {categoryArray.map(c => {
                return <li key={c}>
                    <NavLink to={`/gallery/${c}`}
                             className="galleryMenuLink"
                             activeClassName="activeGalleryMenuLink"
                             onClick={() => setCategory(c)}
                    >{c}</NavLink>
                </li>
            })}
        </ul>
    </nav>
}