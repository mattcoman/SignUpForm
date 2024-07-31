function doGet(e) {
    return HtmlService.createHtmlOutputFromFile('index');
}

function processForm(name, email) {
    const response = `Name: ${name}\nEmail: ${email}`;
    return response;
}
