import React from "react";
import './preview.styles.scss'
import CollectionItem from "../Collection item/collection-item";

const CollectionPreview = ({title,items}) => (
    <div className={'collection-preview'}>
        <h1 className={'title'}>{title.toUpperCase()}</h1>
        <div className={'preview'}>
            {
                items.filter((item, idx)=> idx<4).map(({id, ...otherCollectionItems}) =>
                    <CollectionItem key={'id'} {...otherCollectionItems}/>
                )
            }

        </div>
    </div>
)


export default CollectionPreview