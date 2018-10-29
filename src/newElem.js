import $ from 'jquery';

window.onload = () => {
  let elem = document.querySelector('.circle');
  elem.addEventListener('click', ()=>{
    let curentdate = new Date();
    console.log(curentdate);
  })

}



// $(document).ready = () => {
//     console.log('hi');
//     let elem = $('.circle');
//     console.log(elem);
    
//     $(elem).addClass('.newClass');
//     $(elem).on('click', () => {
//         let data = new data();
//         alert(data);
//    })
// }