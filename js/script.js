$(document).ready(function () {
  $(".menu").click(function () {
    $(".main_nav").toggleClass("active");
    $("body").toggleClass("active");
  });
  $(window).scroll(function () {
    var header = $('header');
    var scrolled = $(window).scrollTop() > 50;
    if (scrolled) {
      header.addClass('scrolled');
    } else {
      header.removeClass('scrolled');
    }
  });


  $('.faq_option ul li').click(function () {
    $('.faq_option ul li').removeClass('active');
    $(this).addClass('active');

    // Get the new content based on the clicked <li>
    var index = $(this).index();
    var newContent = "";
    if (index === 0) {
      newContent = '<h4>What is a Payment Gateway?</h4><p>A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers online.</p>';
    } else if (index === 1) {
      newContent = '<h4>Do I need to pay to Instapay even when there is no transaction going on in my business?</h4><p>No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!</p>';
    } else if (index === 2) {
      newContent = '<h4>What platforms does ACME payment gateway support?</h4><p>ACME payment gateway supports a wide range of platforms including web, mobile, and in-store payments.</p>';
    } else if (index === 3) {
      newContent = '<h4>Does ACME provide international payments support?</h4><p>Yes, ACME provides support for international payments, allowing businesses to accept payments from customers globally.</p>';
    } else if (index === 4) {
      newContent = '<h4>Is there any setup fee or annual maintenance fee that I need to pay regularly?</h4><p>ACME payment gateway does not charge any setup fees or annual maintenance fees. You only pay transaction fees for successful transactions.</p>';
    }

    // Update the content in faq_result_main .faq_result
    $('.faq_result_main .faq_result').html(newContent);
  });
    // Hover effect to toggle dropdown menu
    $('#customDropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).slideDown('fast');
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).slideUp('fast');
    });

});
