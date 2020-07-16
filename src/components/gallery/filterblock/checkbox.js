import React, {useState} from "react";
import {photos} from "../photos"

export const Checkbox = ({filter, handleFilters, checked, setChecked}) => {



    const handleToggle = (filter) => {
        const currentFilter = checked.indexOf(filter)
        const newChecked = [...checked]

        if (currentFilter === -1){
            newChecked.push(filter)
        }else{
            newChecked.splice(currentFilter, 1)
        }
        setChecked(newChecked)
        handleFilters(newChecked)
    }

    return <div className="dropDownCategory">
        <input
            type="checkbox"
            className="categoryInput"
            checked={checked.indexOf(filter) === -1 ? false : true}
            onChange={() => handleToggle(filter)}
        />
        <h6 className="checkboxTitle">{filter}</h6>
    </div>
}