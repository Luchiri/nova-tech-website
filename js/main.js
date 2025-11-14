// Bootstrap form validation
    const form = document.getElementById('contactForm');
    const successAlert = document.getElementById('successAlert');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      e.stopPropagation();

      if (form.checkValidity()) {
        // Show success alert
        successAlert.style.display = 'block';

        // Reset form after submit
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          successAlert.style.display = 'none';
        }, 5000);
      } else {
        form.classList.add('was-validated');
      }
    }, false);