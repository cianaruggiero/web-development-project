function verifyFill(field) { //tracking to see if the textbox has input or not, if not, error condition is toggled
    field.classList.toggle('error', field.value.trim() === '');
}
document.querySelectorAll('.errorCheck').forEach(element => { //tracking when the box is clicked off of
    element.addEventListener('blur', () => verifyFill(element));
  }); 
