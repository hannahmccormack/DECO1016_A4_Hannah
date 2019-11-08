var constraints = {
    name: {
      presence: true,
      length: {
        minimum: 2,
      },
      format: {
        // We don't allow anything that a-z and 0-9
        pattern: "[a-z ]+",
        // but we don't care if the username is uppercase or lowercase
        flags: "i",
        message: "Can only contain letters"
      }
    },
    name: {
        // You need to pick a username too
        presence: true,
        // And it must be between 3 and 20 characters long
        length: {
          minimum: 2,
        },
        format: {
          // We don't allow anything that a-z and 0-9
          pattern: "[a-z ]+",
          // but we don't care if the username is uppercase or lowercase
          flags: "i",
          message: "can only contain letters"
        }
      },
    email: {
      presence: true,
      email: true
    },   
    password: {
        // Password is also required
        presence: true,
        // And must be at least 5 characters long
        length: {
          minimum: 5
        }
      },
    postcode: {
     // postcode is optional but if specified it must be a 4 digit long number
    format: {
        pattern: "\\d{4}",
        message: "Postcode must be 4 digits"
        },
    }
};

//page 1

var form = document.querySelector("#emailPg1Form");
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  handleFormSubmit(form);
});

function handleFormSubmit(form, input) {
    var errors = validate(form, constraints);
    if (!errors) {
      redirect();
    }
  }
    
  function redirect() {
    window.location = "index2.html"; 
  }


//page 2

  var form2 = document.querySelector("#formPg2");
  form2.addEventListener("submit", function(ev) {
    ev.preventDefault();
    handleFormSubmit(form2);
  });

  function handleFormSubmit(form2, input) {
    var errors = validate(form2, constraints);
    if (!errors) {
      redirectPg2();
    }
  }

  function redirectPg2() {
    window.location = "index3.html"; 
  }



//page 3

var form3 = document.querySelector("#formPg3");
form3.addEventListener("submit", function(ev) {
  ev.preventDefault();
  handleFormSubmit(form3);
});

  function handleFormSubmit(form3, input) {
    var errors = validate(form3, constraints);
    if (!errors) {
      redirectPg3();
    }
  }

    
  function redirectPg3() {
    window.location = "index4.html"; 
  }



  