// snippets: rcc
import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';// gamb, this file should be in the public folder

const ProducContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail = () => {
        console.log('hello handleDetail')
    }
    addToCart = () => {
        console.log('hello addToCart')
    }
    render() {
        return (
            <ProducContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
            }}>
                {this.props.children}
            </ProducContext.Provider>
        )
    }
}

const ProductConsumer = ProducContext.Consumer;
export { ProductProvider, ProductConsumer }