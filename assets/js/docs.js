// Documentation JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Sidebar Toggle for Mobile
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('docsSidebar');
  const docsContent = document.querySelector('.docs-content');
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
      if (window.innerWidth <= 1024) {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
          sidebar.classList.remove('open');
        }
      }
    });
    
    // Close sidebar when clicking content on mobile
    if (docsContent) {
      docsContent.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
          sidebar.classList.remove('open');
        }
      });
    }
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add copy button to code blocks
  document.querySelectorAll('pre code').forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      padding: 0.25rem 0.75rem;
      background: rgba(255,255,255,0.1);
      color: white;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s;
    `;
    
    pre.style.position = 'relative';
    
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);
        button.textContent = 'Copied!';
        button.style.background = 'rgba(34, 197, 94, 0.2)';
        button.style.borderColor = 'rgba(34, 197, 94, 0.4)';
        
        setTimeout(() => {
          button.textContent = 'Copy';
          button.style.background = 'rgba(255,255,255,0.1)';
          button.style.borderColor = 'rgba(255,255,255,0.2)';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
    
    button.addEventListener('mouseenter', () => {
      button.style.background = 'rgba(255,255,255,0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
      if (button.textContent === 'Copy') {
        button.style.background = 'rgba(255,255,255,0.1)';
      }
    });
    
    pre.appendChild(button);
  });
  
  // Highlight current section in sidebar based on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '-100px 0px -66% 0px'
  };
  
  const headings = document.querySelectorAll('.prose h2, .prose h3');
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-child');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (id) {
          navLinks.forEach(link => {
            if (link.getAttribute('href')?.includes(`#${id}`)) {
              navLinks.forEach(l => l.classList.remove('active'));
              link.classList.add('active');
            }
          });
        }
      }
    });
  }, observerOptions);
  
  headings.forEach(heading => {
    if (heading.id) {
      observer.observe(heading);
    }
  });
  
});
