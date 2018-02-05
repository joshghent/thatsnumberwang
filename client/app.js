'use strict';

var request = function request(url, callback, callbackArgs) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    // When the request has finished
    if (xhr.readyState === 4) {
      // Check if it was successful
      if (xhr.status === 200) {
        callback(xhr.responseText, callbackArgs);
      } else {
        console.error('There was an issue. The code goblins are on it!');
      }
    }
  };

  xhr.open('GET', url, true);
  xhr.send(null);

  // Return the XMLHttpRequest object
  // This is so we can cancel it in the future
  return xhr;
};

var spinTitle = function spinTitle() {

}

// Callback for the API call
var notifyUser = function notifyUser(data) {
	data = JSON.parse(data);

	if (data.numberwang === true) {
		spinTitle();
		alert("That's Numberwang!");
	} else {
		alert("NO");
	}
};

var buildAPIUrl = function buildAPIUrl() {
	return document.location.href + 'check/' + document.getElementById('isItNumberwang').value;
};

// Calls the API to check if a number is numberwang
var checkNumberwang = function checkNumberwang() {
  request(buildAPIUrl(), notifyUser);
};

window.onload = function () {
  // Add a click handler to the new password button
  // This will generate a new password everytime the button is clicked
  document.getElementById('checkNumberwang').addEventListener('click', checkNumberwang);
};
