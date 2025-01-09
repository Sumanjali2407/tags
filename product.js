function productName(){
    const name="jeans";
    const cost=1000;
    return{name,cost};
}
function productDetails(){
    const product=productName();
    console.log(product);
}
export{productName,productDetails};