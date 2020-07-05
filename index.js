$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
       
    });

    function createProductCard(cardDetails) {
      let mainDiv = $('<div>').addClass('product-card');
      console.log(mainDiv)
      let productLink = $('<a>');
      productLink.attr("href", "./assets/product/product.html?p="+cardDetails.id);
      let productImage =  $('<img>').addClass('product-image');
      productImage.attr("src", cardDetails.preview);
      productImage.attr("alt",cardDetails.name);
      productLink.append(productImage);
      let productDescriptionDiv = $('<div>').addClass('product-desc');
      let productName = $('<h4>').text(cardDetails.name);
      let productBrand = $('<h5>').text(cardDetails.brand);
      let productPrice = $('<p>').text('Rs ' + cardDetails.price);
      productDescriptionDiv.append(productName);
      productDescriptionDiv.append(productBrand);
      productDescriptionDiv.append(productPrice);
      mainDiv.append(productLink);
      mainDiv.append(productDescriptionDiv);
      return mainDiv;
    }

    $.get('https://5f0179f907605200169e7002.mockapi.io/product', function(data) {

      for(var i=0; i<data.length; i++) {
        if(data[i].isAccessory===true) {
          
          $('#accessories-grid').append(createProductCard(data[i]))
        } else {
          $('#clothings-grid').append(createProductCard(data[i]))
        }
      }
    })
}); 
$(document).ready(function() {
  let selectedItems = window.localStorage.getItem('selected-items');
  selectedItems = (selectedItems === null || selectedItems === '') ? ([]) : (selectedItems) ;
  selectedItems = selectedItems.length > 0 ? JSON.parse(selectedItems) : [];

  let cartCount = 0;
  for(var i=0; i<selectedItems.length; i++) {
    cartCount += selectedItems[i].count;
  }

  $('#cart-total').html(cartCount);
})