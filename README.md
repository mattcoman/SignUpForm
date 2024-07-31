# Simple Web App

This is a simple web application that collects a user's name and email, processes the input, and displays the result on the same page. The app is built using HTML, JavaScript, and Google Apps Script.

## Files

- `index.html`: The HTML file that contains the form for collecting user input.
- `script.js`: The JavaScript file that handles the form submission and updates the output.
- `Code.gs`: The Google Apps Script file that processes the form input.
- `README.md`: This file.

## Setup

1. **Create a New Google Apps Script Project:**

   - Go to [Google Apps Script](https://script.google.com/).
   - Click on `New project`.

2. **Add HTML File:**

   - Create a new file named `index.html`.
   - Copy the contents of `index.html` from this repository and paste it into the `index.html` file in your Google Apps Script project.

3. **Add JavaScript File:**

   - Create a new file named `script.js`.
   - Copy the contents of `script.js` from this repository and paste it into the `script.js` file in your Google Apps Script project.

4. **Add Google Apps Script File:**

   - Create a new file named `Code.gs`.
   - Copy the contents of `Code.gs` from this repository and paste it into the `Code.gs` file in your Google Apps Script project.

5. **Deploy the Web App:**

   - In the Google Apps Script project, click on the `Deploy` button.
   - Select `New deployment`.
   - Choose `Web app`.
   - Set the `Project version` to `New version`.
   - Set `Execute as` to `Me`.
   - Set `Who has access` to `Anyone`.
   - Click `Deploy`.
   - Copy the `Web app URL` and save it for later use.

## Usage

1. **Open the Web App:**

   - Open the `Web app URL` you copied during deployment in a web browser.

2. **Submit Form:**

   - Enter your name and email in the form.
   - Click the `Submit` button.

3. **View Output:**

   - The processed name and email will be displayed below the form.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
