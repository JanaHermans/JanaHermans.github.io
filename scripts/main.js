document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const content = document.getElementById('content');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // stop full page reload
        const url = this.getAttribute('href');
  
        fetch(url)
          .then(response => response.text())
          .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const newContent = tempDiv.querySelector('article');
            content.innerHTML = newContent ? newContent.innerHTML : '<p>Content could not be loaded.</p>';
            window.history.pushState(null, '', url); // Update URL
          })
          .catch(() => {
            content.innerHTML = '<p>Failed to load content.</p>';
          });
      });
    });
  });
  