function orderDetails(){
    const orderId=123;
    const orderAdd="hyd";
    return{orderId,orderAdd};
}
function orderList(){
    const order=orderDetails();
    console.log(order);
}
export{orderDetails,orderList};