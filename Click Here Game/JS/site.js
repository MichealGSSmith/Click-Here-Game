$(document).ready(function() {

    //when clicking the visible section this will make it go hidden
    $('section').click(function() {

        //this is changing the first one from visible to hidden
        let elem = $('.visible');
        elem.addClass('hidden');
        elem.removeClass('visible');
        //just seeing if it clicking or not
        console.log('it clicking');
        //adding class visible and removing hidden from the next one in line

        
        
        
        console.log('it clicking');

    })
});