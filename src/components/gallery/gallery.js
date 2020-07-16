import React, {useState} from "react";
import {GalleryMenu} from "./galleryMenu";
import {Redirect, Route, Switch} from "react-router";
import "./galery.css"
import {ItemsQuantity} from "./itemsQuantity";
import {Paginator} from "./paginator";
import {photos} from "./photos"
import {PhotoGallery} from "./photoGallery";
import {FilterBlock} from "./filterblock/filterBlock";

export const Gallery = () => {
    const categoryArray = [];
    const categoryItems = photos.map(p => {
        return p.category
    })
    categoryItems.map(c => {
        if (categoryArray.indexOf(c) < 0){
            categoryArray.push(c)
        }
    })

    const [category, setCategory] = useState(categoryArray[0])
    const gallery = [];
    const [filteredGallery, setFilteredGallery] = useState([])
    photos.forEach((photo) => {
        if (photo.category === category) {
            gallery.push(photo)
        }
        return gallery
    })

    const animations = [
        "animated-section-rotateCarouselLeftIn",
        "animated-section-rotateCarouselRightIn",
        "animated-section-rotateCarouselBottomIn",
        "animated-section-rotateCarouselTopIn"
    ]

    return <div className="gallery">
        <div className="galleryContainer">
            <FilterBlock gallery={gallery} filteredGallery={filteredGallery} setFilteredGallery={setFilteredGallery}/>
            <GalleryMenu categoryArray={categoryArray} setCategory={setCategory}/>
            <ItemsQuantity gallery={gallery}/>
            <Switch>
                <Route exact path="/" render={() => <Redirect to={`/gallery/${categoryArray[0]}`}/>}/>
                {categoryArray.map(c => {
                    let random = parseInt(Math.floor(Math.random() * 4));
                    return <Route path={`/gallery/${c}`} component={() => <PhotoGallery gallery={gallery} filteredGallery={filteredGallery} animation={animations[random]}/>}/>
                })}
            </Switch>
            <Paginator/>
        </div>
    </div>
}
