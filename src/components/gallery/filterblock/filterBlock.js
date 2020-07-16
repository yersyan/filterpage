import React, {useState} from "react";
import filterImg from "../../../images/filter.png";
import {AiOutlineClose} from "react-icons/all";
import {DropDownBlock} from "./dropDownBlock";

export const FilterBlock = ({gallery, filteredGallery, setFilteredGallery}) => {
    const [filters, setFilters] = useState({
        type: [],
        license: [],
        tag: [],
        format: []
    });


    return <aside className="filterBlock">
        <header className="filterHeader">
            <div className="titleBlock">
                <img src={filterImg} alt="filter" />
                <h4 className="filterTitle">Filters</h4>
            </div>
            <button className="filterBtn">
                <AiOutlineClose/>
            </button>
        </header>
        <DropDownBlock gallery={gallery} filters={filters} setFilters={setFilters} filteredGallery={filteredGallery} setFilteredGallery={setFilteredGallery}/>
    </aside>
}