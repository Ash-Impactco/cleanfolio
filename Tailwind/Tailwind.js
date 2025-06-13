// No additional JS is required if you use the inline onclick in the HTML above.
// However, if you want to centralize the toggle logic for accessibility, you can use the following:

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tailwind-accordion-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const content = btn.nextElementSibling;
      const arrow = btn.querySelector('svg');
      if (content) content.classList.toggle('hidden');
      if (arrow) arrow.classList.toggle('rotate-180');
    });
  });
});
