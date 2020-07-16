import React, {useEffect, useState} from "react";
import {MdKeyboardArrowDown, MdKeyboardArrowRight} from "react-icons/all";
import {photos} from "../photos"
import {Checkbox} from "./checkbox";

export const DropDownBlock = ({gallery, filters, setFilters, filteredGallery, setFilteredGallery}) => {
    const [checked, setChecked] = useState([])
    const filtersArray = gallery.map(g => {
        return g.filters
    })



    function filter(array = [], filters = {}) {
        const keys = Object.keys(filters).filter(key => filters.hasOwnProperty(key));
        return array.filter(elem => {
            const commonKeys = keys.filter(key => elem.hasOwnProperty(key));
            return commonKeys.reduce((flag, key) => (flag && filters[key].includes(elem[key])), true);
        });
    }

    const filteredPhotos = filter(filtersArray, filters);


    useEffect(() => {
        console.log(filteredPhotos)
    })


    const [isOpen, setIsOpen] = useState(true)
    const [item] = photos;

    const filterKey = Object.keys(item.filters)


    return <section className="filterSection">
        {filterKey.map((f, index) => {
            const filterArray = []
            const photoItems = photos.map(p => {
                return p.filters[filterKey[index]]
            })
            photoItems.map(p => {
                if (filterArray.indexOf(p) < 0){
                    filterArray.push(p)
                }
            })


            const handleFilters = (filters, category) => {

                const newFilters = {...filters}
                newFilters[category] = filters

                setFilters(newFilters)

            }

            return <div className="" key={f}>
                <div className="dropDownTitleBlock" onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                    {isOpen ? <MdKeyboardArrowDown/> : <MdKeyboardArrowRight/>}
                    <h5 className="dropDownTitle">{f}</h5>
                </div>

                {isOpen && <div className="dropDownCategoryBlock">
                    {filterArray.map(filter => {
                        switch (f) {
                            case filterKey[index]:
                                return  <Checkbox
                                    filter={filter}
                                    handleFilters={filters => handleFilters(filters, filterKey[index])}
                                    checked={checked}
                                    setChecked={setChecked}
                                />
                        }
                    })}
                </div>}
            </div>
        })}
    </section>
}