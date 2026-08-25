// Sourcify.ae — landing page interactions

document.addEventListener('DOMContentLoaded', () => {
  // Reveal-on-scroll
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  // File upload label
  const fileInput = document.getElementById('rfqFile');
  const fileDropText = document.getElementById('fileDropText');
  if (fileInput && fileDropText) {
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        fileDropText.textContent = fileInput.files[0].name;
        fileDropText.classList.add('file-name');
      } else {
        fileDropText.textContent = 'Click to upload or drop file here';
        fileDropText.classList.remove('file-name');
      }
    });
  }

  // RFQ form submit
  const form = document.getElementById('rfqForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      success.classList.add('show');
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      form.reset();
      fileDropText.textContent = 'Click to upload or drop file here';
      fileDropText.classList.remove('file-name');
    });
  }
});
