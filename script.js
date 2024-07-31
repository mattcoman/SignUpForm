function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    google.script.run.withSuccessHandler(updateOutput).processForm(name, email);
}

function updateOutput(response) {
    document.getElementById('output').innerText = response;
}
