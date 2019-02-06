document.addEventListener('DOMContentLoaded', function(){

  // Ciblage
  let para = document.querySelector('p');

  // Event
  para.addEventListener('click', function() {

    console.log(this);

  });

});
