import React from "react";
import {NavLink} from "react-router-dom";

export const GalleryMenu = () => {
    const menu = [
        {title: "photos", path: "/gallery/photo"},
        {title: "vectors", path: "/gallery/vectors"},
        {title: "icons", path: "/gallery/icons"},
        {title: "mockups", path: "/gallery/mockups"},
        {title: "web design", path: "/gallery/web-design"},
    ]

    return <nav className="galleryNav">
        <ul className="galleryMenu">
            {menu.map(m => {
                return <li key={m.title}>
                    <NavLink to={m.path} className="galleryMenuLink" activeClassName="activeGalleryMenuLink">{m.title}</NavLink>
                </li>
            })}
        </ul>
    </nav>
}