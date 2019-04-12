  var items = [];
  var image;

  var name;

  var price;

  var cost;
  var cost = [];
  var clicks;
  clicks = 0;
  var total;

  $('.add').click(function() {

      image = $('.picturev').val();
      name = $('.namev').val();
      price = parseInt($('.pricev').val());

      items.push(name);

      $('.footer').text('Items in cart:' + ' ' + items.length);

      $('.thecart').append('<img class="nameh" src=' + image + '>');
      console.log(image);
      $('.thecart').append("<p class='name'>" + name + "</p>");
      $('.thecart').append("<p class='name'>" + "$" + price + "</p>");


      cost.push(price);
      clicks = clicks + 1;


      if (clicks === 3) {
          $('.add').hide();
          alert('Your tiny shopping cart is full, sorry.');
          console.log(clicks);
      }

  });




  $('.co').click(function() {
      if (cost.length === 1) {
          total = cost[0];
      } else if (cost.length === 2) {
          total = cost[0] + cost[1];
      } else if (cost.length === 3) {
          total = cost[0] + cost[1] + cost[2];
      }

      alert('Your total is ' + total + ', ' + 'proceed?');
      if (confirm(alert)) {
          location.reload();
      }
  });

  $('.x').click(function() {
      $('.fakeads').hide();

  });
  