import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../component/Preview collection/preview";


class ShopPage extends React.Component{
    constructor() {
        super();

        this.state={
            collections : SHOP_DATA


        }
    }

    render() {
        return(
            <div className={'shop-page'}>
                {
                    this.state.collections.map(({id, ...otherSectionsProps}) =>
                        <CollectionPreview key={'id'} {...otherSectionsProps}/>
                    )
                }
            </div>
        )
    }
}

export default ShopPage;