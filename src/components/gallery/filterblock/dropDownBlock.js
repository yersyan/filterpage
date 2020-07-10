import React, {useState} from "react";
import {MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/all";

export const DropDownBlock = () => {
    const [isOpen, setIsOpen] = useState(false)


    return <section className="filterSection">
        <div className="dropDownTitleBlock">
            {isOpen
                ? <span className="dropDownIcon" onClick={() => setIsOpen(false)}><MdKeyboardArrowDown/></span>
                : <span className="dropDownIcon" onClick={() => setIsOpen(true)}><MdKeyboardArrowRight/></span>}
            <h5 className="dropDownTitle">Item Type</h5>
        </div>
        {isOpen && <div className="dropDownCategoryBlock">
            <div className="dropDownCategory">
                <input type="checkbox" className="categoryInput"/>
                <h6 className="checkboxTitle">Photos</h6>
            </div>
            <div className="dropDownCategory">
                <input type="checkbox" className="categoryInput"/>
                <h6 className="checkboxTitle">Photos</h6>
            </div>
            <div className="dropDownCategory">
                <input type="checkbox" className="categoryInput"/>
                <h6 className="checkboxTitle">Photos</h6>
            </div>
        </div>}
    </section>
}