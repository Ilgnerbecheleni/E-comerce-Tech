const buttons = document.querySelectorAll('.buy');
const cart = document.querySelector('.cart');
const msg = document.querySelector('.msg')
let cart_quant = 0;

$('.buy').click(function() {
    $('#mymodal').modal('show');
    cart.classList.remove('hidden')
    cart_quant++;
    cart.setAttribute('cart-valor', cart_quant);
  });


$('#navbutton').click(()=>{
    console.log('click')

});




