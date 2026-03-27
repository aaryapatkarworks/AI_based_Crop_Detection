
document.addEventListener('DOMContentLoaded', function() {
  // Form state
  const formData = {
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    },
    location: {
      latitude: '',
      longitude: '',
      areaSize: '',
      areaUnit: 'sqft'
    }
  };

  // Get form and its elements
  const form = document.getElementById('userDetailsForm');
  const submitButton = document.getElementById('submitButton');

  // Track form input values
  const trackInput = (section, field, element) => {
    element.addEventListener('input', (e) => {
      formData[section][field] = e.target.value;
    });
  };

  // Personal Info fields
  trackInput('personalInfo', 'firstName', document.getElementById('firstName'));
  trackInput('personalInfo', 'lastName', document.getElementById('lastName'));
  trackInput('personalInfo', 'email', document.getElementById('email'));
  trackInput('personalInfo', 'phone', document.getElementById('phone'));
  
  // Address fields
  trackInput('address', 'street', document.getElementById('street'));
  trackInput('address', 'city', document.getElementById('city'));
  trackInput('address', 'state', document.getElementById('state'));
  trackInput('address', 'zipCode', document.getElementById('zipCode'));
  
  // Location fields
  trackInput('location', 'latitude', document.getElementById('latitude'));
  trackInput('location', 'longitude', document.getElementById('longitude'));
  trackInput('location', 'areaSize', document.getElementById('areaSize'));
  
  // Area unit select
  const areaUnitSelect = document.getElementById('areaUnit');
  areaUnitSelect.addEventListener('change', (e) => {
    formData.location.areaUnit = e.target.value;
  });

  // Toast notification function
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastContent = toast.querySelector('.toast-content');
    
    // Set message and type
    toastContent.textContent = message;
    toast.className = 'toast show ' + type;
    
    // Show toast
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Form submission handler
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
    try {
      // In a real app, you would send this data to your API
      console.log('Form submitted with data:', formData);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showToast('Your information has been submitted successfully.');
      
      // Optional: Reset form
      // form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast('There was an error submitting your information. Please try again.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit';
    }
  });
});
