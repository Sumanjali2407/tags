  function a(){
    let g=10;
    function b(){
      console.log("before hidding");
        console.log(g);
    }
    return b;
 }
    a()();
    console.log("after hidding");
        console.log(g);

  