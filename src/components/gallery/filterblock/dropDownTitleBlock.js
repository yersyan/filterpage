import React from "react";
import {MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/all";

export const DropDownTitleBlock = ({title, isActiveFilterIcons, setIsActiveFilterIcons}) => {

    const onClickFilterIcon = (value) => {
        const currentFilterIcon = isActiveFilterIcons.indexOf(value)
        const newIsActiveFilterIcons = [...isActiveFilterIcons]

        if (currentFilterIcon === -1){
            newIsActiveFilterIcons.push(value)
        }else {
            newIsActiveFilterIcons.splice(currentFilterIcon, 1)
        }

        setIsActiveFilterIcons(newIsActiveFilterIcons)
    }


    return <div className="dropDownTitleBlock" key={title}>

        <span className="dropDownIcon" onClick={() => onClickFilterIcon(title)}>

        </span>
        <h5 className="dropDownTitle">{title}</h5>
    </div>
}