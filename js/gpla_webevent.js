
$(document).ready(function(){
    searchbar();
});





function searchbar(){
    $('header > div > div > div > button').click(function(){
        $('header > div > div > div > div').toggleClass('searchbar');
    })
    $('header > div > div > div > div > form > div > input[type="button"]').click(function(){
        $('header > div > div > div > div').removeClass('searchbar');
    })
}