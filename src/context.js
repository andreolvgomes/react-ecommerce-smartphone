// snippets: rcc
import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';// gamb, this file should be in the public folder

const ProducContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProducts();
        //console.log(detailProduct);
    };
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts };
        })
    };
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        })
    };
    addToCart = (id) => {
        console.log('hello from add to cart ${}');
    };
    render() {
        return (
            <ProducContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {/* <button onClick={this.tester}>test me</button> */}
                {this.props.children}
            </ProducContext.Provider>
        )
    }
}

const ProductConsumer = ProducContext.Consumer;
export { ProductProvider, ProductConsumer }