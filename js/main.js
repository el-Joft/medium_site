$(".animsition").animsition({
    inClass: 'fade-in-right-lg',
    outClass: 'fade-out-right-lg',
    linkElement: 'header a',
    inDuration: 1000,
    outDuration: 500
});

$('.main-nave').sticky({
    getWidthFrom: '.container',
    responsiveWidth: true
});
$('.main-nave').on('sticky-start', function() {
    $(this).append('<button class="btn btn-primary nav-bar-btn">Get started</button>');
    $(this).css("width", "100%");
})
$('.main-nave').on('sticky-end', function() {
    $('.btn').remove();
});
// $('.header').on('sticky-start', function() {
//         $('.description').html('we build <strong>great</strong> apps');
//     })
//     //CREATING AN EVENT IN WHICH WHEN THE SCROLL START THE MIDDLE NAV BAR TEXT WILL CHANGE
//     //THE on('sticky-start') IS USED TO START THE EVENT JUST LIKE KEYBOARD AND MOUSE EVENT
//     //TO REVERT IT BACK THE on('sticky-end') WILL BE USED
// $('.header').on('sticky-end', function() {
//     $('.description').html('we build apps'); //--INSTEAD OF USING APPEND, THE HTML CAN BE USED BUT
//     //USING APPEND IS BETTER
// });
// //ANOTHER ELEMENT
// $('.work').sticky({
//     topSpacing: 60,
//     getWidthFrom: '.container',
//     responsiveWidth: true
// });

// $('.work').on('sticky-start', function() {
//     $(this).append('<a href="mailto:ottimothy@gmail.com" class="email-text">Email&nbsp;us</a>');
// });
// $('.work').on('sticky-start', function() {
//     $('.email-text').remove();
// });

// //TO MAKE THE STICKY BAR RESPONSIVE WE USE-check line 10 and 11,