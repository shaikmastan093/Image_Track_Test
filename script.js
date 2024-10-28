document.addEventListener('DOMContentLoaded', () => {
    const clickableIcons = document.querySelectorAll('.clickable');
  
    clickableIcons.forEach((icon) => {
      icon.addEventListener('mouseenter', () => {
        icon.setAttribute('animation', 'property: scale; to: 1.3 1.3 1.3; dur: 200; easing: easeInOutQuad;');
      });
  
      icon.addEventListener('mouseleave', () => {
        icon.setAttribute('scale', '1 1 1');
      });
  
      icon.addEventListener('click', () => {
        icon.setAttribute('animation', 'property: color; to: #FF9800; dur: 300;');
        setTimeout(() => {
          icon.setAttribute('animation', 'property: color; to: white; dur: 300;');
        }, 300);
      });
    });
  });
  