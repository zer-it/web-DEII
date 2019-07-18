
jQuery.get('navbar.html', function(data) {
    var pathArray = window.location.pathname.split('/');

   //process text file line by line
   $('nav').html(data);
    switch (pathArray[1]){
        case 'index.html':
            //$('nav').children[0].className += 'active';
        break;
    }
});

jQuery.get('footer.html',function(data){
    $('footer').html(data);
})

