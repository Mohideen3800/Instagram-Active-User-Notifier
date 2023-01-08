// background.js

// Replace 'USERNAME' with the username you want to check
const username = '_me_mohideen';

// Poll Instagram every minute to check if the user is active
setInterval(() => {
  fetch(`https://www.instagram.com/${username}`)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const isActive = doc.querySelector('._1L8t8');
    if (isActive) {
      // User is active, send a notification
      const options = {
        type: 'basic',
        iconUrl: 'icon48.png',
        title: `${username} is active on Instagram`,
        message: 'They may be posting new content!'
      };
      chrome.notifications.create(options);
    }
  });
}, 30000);
