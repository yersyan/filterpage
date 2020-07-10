import React from "react";
import {GalleryMenu} from "./galleryMenu/galleryMenu";
import {Route, Switch} from "react-router";
import {PhotoGallery} from "./photogallery/photoGallery";
import {VectorGallery} from "./vectorgallery/vectorGallery";
import {IconGallery} from "./icongallery/iconGallery";
import {MockupGallery} from "./mockupgallery/mockupGallery";
import {WebDesignGallery} from "./webdesigngallery/webDesignGallery";
import "./galery.css"
import {ItemsQuantity} from "./itemsQuantity";
import {Paginator} from "./paginator";

export const Gallery = () => {
    return <div className="gallery">
        <div className="galleryContainer">
            <GalleryMenu/>
            <ItemsQuantity/>
            <Switch>
                <Route path="/gallery/photos" render={() => <PhotoGallery/>}/>
                <Route path="/gallery/vectors" render={() => <VectorGallery/>}/>
                <Route path="/gallery/icons" render={() => <IconGallery/>}/>
                <Route path="/gallery/mockups" render={() => <MockupGallery/>}/>
                <Route path="/gallery/web-design" render={() => <WebDesignGallery/>}/>
            </Switch>
            <Paginator/>
        </div>
    </div>
}
