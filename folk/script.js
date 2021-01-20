function start(name) {
    console.log('Hello' + name);
  }


  start(' Taras');
  start(' Some');
  function sum(a = 0, b = 0, c = 0){
      const result = a * b + c;
      console.log('result: ',result)

  }

  sum(100, 20, 210)
  function sm(a = 0, b = 0, c = 0, d = 0 ){
    const result = a * b + c * d;
    console.log('result: ',result)

}





function sum2(){
    const xx = document.querySelector('#xx');
    const x = document.querySelector('#x');
    const x0 = document.querySelector('#x0');


    const result = +xx.value + +x.value + +x0.value;
    console.log('result: ', result);
    }
sum2(100, 20, 210)
