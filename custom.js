console.log('hello, welcome to the simplest start-up starter');

/* 
*
*
*
* HERO SECTION 
*
*
*
*/ 
$(".main-cta").sticky({
  responsiveWidth: true,
  getWidthFrom:'.w150p'
});
$('.main-cta').on('sticky-start', function() {
  $('.secondary-cta').css('display', 'none');
  $('.main-cta').css('margin-top', '0.9rem'); // XXX : hacky, indeed
  $('.main-cta').text('Join');
  $('body').toggleClass('is-sticky');
  $('.secondary-cta').css('display','none');
});
$('.main-cta').on('sticky-end', function() { 
  $('.secondary-cta').toggle();
  $('.secondary-cta').css('display', '');
  $('.main-cta').css('margin-top', '');
  $('.main-cta').text('Join mailing list');
  $('body').toggleClass('is-sticky');
  $('body').removeClass("is-expanded");
  $('.menu-section-container-nav').css({display:'none', opacity:0});
  $('#nav-toggle').css('display','block');
});



/* 
*
*
*
* MENU SECTION 
*
*
*
*/
function toggleNavigation() {

  if ($('body').hasClass("is-expanded")) {
    $('body').removeClass("is-expanded");
    $('.menu-section-container-nav').css({display:'none', opacity:0});
  } else {
    $('body').addClass("is-expanded");
    $('.menu-section-container-nav').css({display:'flex'});
    setTimeout(function () {
      $('.menu-section-container-nav').css({opacity:1});
    }, 500);
    
  }

  if ($('#nav-toggle').hasClass("active")) {
    $('#nav-toggle').removeClass("active");
  } else {
    $('#nav-toggle').addClass("active");
  }

} 
$(document).ready(function(){
  
  $("#nav-toggle").on("click", function() {
    toggleNavigation();
  });

  $(".nav-item").on("click", function(e) {
    toggleNavigation();
    $.scrollTo(
      '.' + $(e.currentTarget).attr('data-target'), {duration:500});
  });

  $(".footer-nav-item").on("click", function(e) {
    $.scrollTo(
      '.' + $(e.currentTarget).attr('data-target'), {duration:500});
  });

  $( window ).resize(function() {
    if ( ! $('body').hasClass("is-sticky") ) {
      $('.main-cta').width('auto');
    }
  });
});



/* 
*
*
*
* CONTACT SECTION 
*
*
*
*/
var $loadEmailButton = $('.load-email-button')[0];
var $contactForm = $('#contact-form');
var DEFAULT_TEXT_CONTENT = 'Join the party';

$contactForm.submit(
  function (e) {
    e.preventDefault();
    $loadEmailButton.textContent = 'Please wait...';
    var emailValue = $('.load-email-enter').val();
    var honeyPotValue = $('.load-email-enter-fake').val();
    if (honeyPotValue === '') {
      $.ajax({
        url: 'https://formspree.io/' + FORMSPREE_EMAIL,
        method: 'POST',
        data: { email: emailValue },
        dataType: 'json',
        success: function () {
          $loadEmailButton.classList.add('load-email-button-is-active');
          $('.first-page-email-enter').attr('disabled', 'disabled');
          $('button.load-email-button').attr('disabled', 'disabled');
          $loadEmailButton.textContent = DEFAULT_TEXT_CONTENT;
        },
        error: function () {
          $loadEmailButton.classList.add('load-email-button-is-error');
          setTimeout(function () {
            $('.first-page-email-enter').val('');
            $loadEmailButton.classList.remove('load-email-button-is-error');
            $loadEmailButton.textContent = DEFAULT_TEXT_CONTENT;
          }, 5000);
        }
      });
    }
  }
);


/* 
*
*
*
* FONT LOADING 
*
*
*
*/
WebFont.load({
  google: {
    families: ['Open Sans:400,700,800', 'Lora:400,700']
  }
});


var fontA = new FontFaceObserver('Open Sans', {weight: 400});
var fontB = new FontFaceObserver('Open Sans', {weight: 700});
var fontC = new FontFaceObserver('Open Sans', {weight: 800});
var fontD = new FontFaceObserver('Lora', {weight: 400});
var fontE = new FontFaceObserver('Lora', {weight: 700});

$(document).ready(function(){
  Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load(), fontE.load()]).then(function () {
    console.log('Family A & B & C & d & E have loaded');
    $('html').addClass("fonts-loaded");
  });
});


/* 
*
*
*
* PRICING SECTION 
*
*
*
*/
$(document).ready(function(){
  $('.plan-a').attr('href', 'https://www.payfacile.com/simpleststartupstart/s/plan-a')
  $('.plan-b').attr('href', 'https://www.payfacile.com/simpleststartupstart/s/plan-b')
  $('.plan-c').attr('href', 'https://www.payfacile.com/simpleststartupstart/s/plan-c')
});

/* Crisp */
<script type="text/javascript">$crisp=[];CRISP_WEBSITE_ID="68306b54-79ef-4a8c-bcd2-f67eb0761500";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.im/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>

/* Google Analytics */
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93854002-1', 'auto');
  ga('send', 'pageview');

</script>

/* Formspree */
<form action="https://formspree.io/nur.azhar@amaljariah.com"
      method="POST">
    <input type="text" name="name">
    <input type="email" name="_replyto">
    <input type="submit" value="Send">
</form>
