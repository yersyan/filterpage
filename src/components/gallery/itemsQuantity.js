import React from "react";

export const ItemsQuantity = ({gallery}) => {
    return <div className="itemsQuantity">
        {`${gallery.length} items`}
    </div>
}