import React from 'react'

const Cards = (props) => {
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('id_card', target.id); 

    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Cards