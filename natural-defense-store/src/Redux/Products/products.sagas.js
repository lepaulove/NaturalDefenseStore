import { takeLatest, put, all, call } from "redux-saga/effects"
import productTypes from "./products.types"
import  { handleAddProduct, handlefetchProducts, handleDeleteProduct } from "./products.helpers"
import { auth } from "../../Firebase/utils"
import { setProducts, fetchProductsStart } from "./products.actions"

export function* addProduct({payload: {
    productType,
    productName,
    productImageUrl,
    productPrice
}}){
    try{
        const timeStamp = new Date()
        yield handleAddProduct({
            productType,
            productName,
            productImageUrl,
            productPrice,
            productAdminUserUID: auth.currentUser.uid,
            createdDate: timeStamp
        })
        yield put(fetchProductsStart())
    }catch(err){
        console.log(err)
    }
}

export function* onAddProductStart(){
    yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct)
}

export function* fetchProducts(){
    try{
        const products = yield handlefetchProducts()
        yield put(setProducts(products))
    }catch(err){
        console.log(err)
    }
}

export function* onFetchProductsStart(){
    yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProducts)
}

export function* deleteProduct({payload}){
    try{
        yield handleDeleteProduct(payload)
        put(fetchProductsStart())
    }catch(err){
        console.log(err)
    }
}

export function* onDeleteProductStart(){
    yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct)
}

export default function* productSagas(){
    yield all([
        call(onAddProductStart),
        call(onFetchProductsStart),
        call(onDeleteProductStart)
    ])
}