
const validateEmail = (input) => {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
}

const form = document.querySelector("#subscribe__form");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  // grab submitted email
  const submitted_email = form.elements['email'].value;
  const url = form.action;

  // validate client side
  if (!validateEmail(submitted_email)) {

    alert("Invalid e-mail");
  } else {

    // set up submission as object
    const payload = {
      email: submitted_email
    };
    // convert to JSON ready for HTTP request
    const json_payload = JSON.stringify(payload);

    let res = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: json_payload
    });

    // if the response is not ok throw an error (for debugging)
    if (!res.ok) {
      throw new Error();
    } else {
      return res;
    }
  }
});
