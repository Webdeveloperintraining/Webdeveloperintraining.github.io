document.addEventListener('DOMCOntentLoaded', () => {
  document.getElementById("formElem").addEventListener('submit',handleForm())
});

function handleForm () {
  e.preventDefault(); //stop the page reloading
  let formData = new FormData(myForm);
  formData.append('submitted', new Date());

  for (let key of formData.keys()) {
    console.log(key, formData.get(key));
  }
};
