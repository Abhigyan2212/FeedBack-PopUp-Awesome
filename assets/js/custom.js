var emojis = $('.ratingicons img');

emojis.on('mouseenter', function()
{
    var src = $(this).attr("src").replace('.png', '.gif');
    $(this).attr("src", src);
})
emojis.on('mouseleave', function()
{
    var src = $(this).attr("src").replace('.gif', '.png');
    $(this).attr("src", src);
})

emojis.on('click', function()
{
    emojis.removeClass('active')
    $(this).addClass('active')
})


$('.cross').on('click', function()
{
        $('.animationTrigger').removeClass('popup');
        $('.animationTrigger').addClass('popup-reverse');
    setTimeout(function()
    {
        $('.animationTrigger').removeClass('popup-reverse');
        $('.animationTrigger').addClass('popup');

    }, 1000)

})
$('#sub').on('click', function()
{
    window.location = 'thankyou.html';
})