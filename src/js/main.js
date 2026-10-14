// InstaFace - Simple JavaScript
// Author: Rogelio Q. Mandamian III (BSDS-3A, USTP)
// Uses only concepts from "inputs and js.pptx"

// Function to create a post in the feed
function createPost() {
	let postInput = document.getElementById("post-input");
	let text = postInput.value;

	// Check if input is empty
	if (text == "") {
		alert("Please write something before posting!");
	} else {
		let feed = document.getElementById("feed-container");

		// Create new post box
		let newPost = document.createElement("div");
		newPost.className = "box post-box";
		newPost.innerHTML = `
			<div class="box-header">
				<div class="avatar-small">
					<img src="assets/img/pfp_kuno.jpg" alt="Photo">
				</div>
				<div>
					<strong>Rogelio Q. Mandamian III</strong>
					<small style="color: #8e8e8e;">&bull; Just now</small>
				</div>
			</div>
			<p style="font-size: 14px; margin-bottom: 6px;">` + text + `</p>
			<div class="post-actions">
				<button class="like-btn" onclick="likePost(this)">Like (0)</button>
				<span style="font-size: 12px; color: #8e8e8e;">Anti-AI Protected</span>
			</div>
		`;

		// Add to the top of feed
		feed.prepend(newPost);

		// Clear input box
		postInput.value = "";
	}
}

// Function to like a post
function likePost(button) {
	button.innerText = "Liked (1)";
	button.style.backgroundColor = "#262626";
	button.style.color = "#ffffff";
}

// Function for login form
function handleLogin(event) {
	event.preventDefault();
	let email = document.getElementById("login-email").value;
	let password = document.getElementById("login-password").value;
	let alertBox = document.getElementById("login-alert");

	let savedEmail = localStorage.getItem("registeredEmail");
	let savedUsername = localStorage.getItem("registeredUsername");
	let savedPassword = localStorage.getItem("registeredPassword");

	let isDemo = (email == "mandamian.rogelio@ustp.edu.ph" || email == "troge_dev") && password == "password123";
	let isRegistered = (savedEmail && (email == savedEmail || email == savedUsername)) && password == savedPassword;

	if (email == "" || password == "") {
		alert("Please enter both email and password.");
	} else if (isDemo || isRegistered) {
		if (alertBox) {
			alertBox.className = "form-alert success";
			alertBox.innerText = "Login successful! Redirecting to feed...";
		}
		alert("Login successful! Welcome to InstaFace, Rogelio.");
		window.location.href = "../index.html";
	} else {
		if (alertBox) {
			alertBox.className = "form-alert error";
			alertBox.innerText = "Incorrect email/username or password. Please try again.";
		}
		alert("Incorrect email/username or password! Please check your credentials.");
	}
}

// Function to fill demo credentials
function fillDemo() {
	let emailField = document.getElementById("login-email");
	let passwordField = document.getElementById("login-password");
	let alertBox = document.getElementById("login-alert");

	emailField.value = "mandamian.rogelio@ustp.edu.ph";
	passwordField.value = "password123";

	if (alertBox) {
		alertBox.className = "form-alert";
		alertBox.innerText = "";
	}
}

function fillDemoUser() {
	fillDemo();
}

// Function for signup form
function handleSignup(event) {
	event.preventDefault();
	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;
	let email = document.getElementById("signup-email").value;
	let username = document.getElementById("signup-username").value;
	let password = document.getElementById("signup-password").value;
	let confirmPass = document.getElementById("confirm-password").value;
	let terms = document.getElementById("terms-checkbox").checked;

	if (firstName == "" || lastName == "" || email == "" || password == "") {
		alert("Please fill in all required fields.");
	} else if (password != confirmPass) {
		alert("Passwords do not match!");
	} else if (terms == false) {
		alert("Please accept the terms and privacy policy.");
	} else {
		localStorage.setItem("registeredEmail", email);
		localStorage.setItem("registeredUsername", username);
		localStorage.setItem("registeredPassword", password);

		alert("Account created successfully! Welcome, " + firstName + ".");
		window.location.href = "login.html";
	}
}

// Function to save privacy settings
function saveSettings() {
	alert("Privacy settings saved successfully!");
}

// Function to clear data
function clearCache() {
	let ask = confirm("Are you sure you want to clear local data?");
	if (ask == true) {
		alert("Local data cleared.");
		window.location.reload();
	}
}
