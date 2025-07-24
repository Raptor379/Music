document.addEventListener('DOMContentLoaded', () => {
  const tumbler = document.getElementById('tumbler');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const NavIcons = document.querySelectorAll('.display-transition');
  const NavIconsNone = document.querySelectorAll('.display_none-transition');
  const shadows = document.querySelectorAll('.shadow-transition') 
  let positionX = 0;
  let tumblerState = true;

  tumbler.addEventListener('click', () => {
    if (tumblerState) {
        positionX = -42;
        tumbler.style.transform = `translateX(${positionX}px)`;
        tumblerState = false;
        moon.style.opacity = 0;
        sun.style.opacity = 1;
        document.documentElement.style.setProperty('--main-color', '#FAFAFA');
        document.documentElement.style.setProperty('--elements-color', '#FAFAFA');
        document.documentElement.style.setProperty('--text-color', '#000000');
        NavIcons.forEach(el => {
            el.style.display = 'none';
        })
        NavIconsNone.forEach(el => {
            el.style.display = 'block';
        })
        shadows.forEach(el => {
            el.style.boxShadow = '0 4px 12px #0000003d';
        })
    }
    else {
        positionX = 0;
        tumbler.style.transform =`translateX(${positionX}px)`;
        tumblerState = true;
        sun.style.opacity = 0;
        moon.style.opacity = 1;
        document.documentElement.style.setProperty('--main-color', '#070606');
        document.documentElement.style.setProperty('--elements-color', '#000000');
        document.documentElement.style.setProperty('--text-color', '#FFFFFF');
        NavIconsNone.forEach(el => {
            el.style.display = 'none';
        })
        NavIcons.forEach(el => {
            el.style.display = 'block';
        })
        shadows.forEach(el => {
            el.style.boxShadow = 'none';
        })
    }
  });
});