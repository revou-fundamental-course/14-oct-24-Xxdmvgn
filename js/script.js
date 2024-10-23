// Script to dynamically set the user's name on the banner
document.addEventListener('DOMContentLoaded', function () {
    let userName = prompt('Please enter your name:', 'Guest');
    document.getElementById('userName').textContent = userName ? userName : 'Guest';
});

// Form validation and displaying submitted form values
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    document.getElementById('output').innerHTML = `
        <h3>Form Submitted</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
});
