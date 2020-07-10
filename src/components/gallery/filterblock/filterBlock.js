import React from "react";
import filterImg from "../../../images/filter.png";
import {AiOutlineClose} from "react-icons/all";
import {DropDownBlock} from "./dropDownBlock";

export const FilterBlock = () => {
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
        <DropDownBlock/>
    </aside>
}