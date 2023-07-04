// window.addEventListener('scroll',function(){
//   const header = document.querySelector('header');
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

function togglemenu(){
  const menutoggle = document.querySelector('.menutoggle');
  const navigation = document.querySelector('.navigation');
  menutoggle.classList.toggle('active');
  navigation.classList.toggle('active');
};

(function($) {
  $(".contact-form").validate({
      rules: {
          name: {
              required: true,
              minlength: 2
          },
          email: {
              required: true,
              email: true
          },
          subject: {
              required: true,
              minlength: 2
          },
          message: {
              required: true,
              minlength: 2
          }
      },
      messages: {
          name: {
              required: "come on, you have a name don't you?",
              minlength: "your name must consist of at least 2 characters"
          },
          email: {
              required: "no email, no support"
          },
          subject: {
              required: "you have a reason to contact, write it here",
              minlength: "thats all? really?"
          },
          message: {
              required: "um...yea, you have to write something to send this form.",
              minlength: "thats all? really?"
          }
      },
      submitHandler: function(form) {
          $(form).ajaxSubmit({
              type:"POST",
              data: $(form).serialize(),
              url:"mail.php",
              success: function() {
                  $(".contact-form").resetForm();
                  $(".success").slideDown("slow");
              },
              error: function() {
                  $(".error").slideDown("slow");
              }
          });
      }
  });    
})(jQuery);