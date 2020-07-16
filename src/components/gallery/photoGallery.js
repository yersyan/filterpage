import React from "react";
import Gallery from "react-photo-gallery";
import "./animations.css"

export const PhotoGallery = ({gallery, filteredGallery, animation}) => {

    return <Gallery photos={filteredGallery.length ? filteredGallery : gallery} margin={8}  targetRowHeight={(containerWidth) => 220}/>

}

