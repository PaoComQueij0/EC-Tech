document.addEventListener("DOMContentLoaded", function() {

  const whatsappLinks = document.querySelectorAll("a[href*='wa.me']");

  whatsappLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      gtag('event', 'conversion', {
        'send_to': 'AW-17941151842/XKULCK3s5_0bEOKAgetC',
        'value': 1.0,
        'currency': 'BRL'
      });
    });
  });

});
