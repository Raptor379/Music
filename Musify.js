document.addEventListener('DOMContentLoaded', () => {
  const tumbler = document.getElementById('tumbler');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const Display = document.querySelectorAll('.display-transition');
  const DisplayNone = document.querySelectorAll('.display_none-transition');
  //const Particles = document.querySelectorAll
  const shadows = document.querySelectorAll('.shadow-transition')
        const man = document.getElementById('bg-man');
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
        Display.forEach(el => {
            el.style.display = 'none';
        })
        DisplayNone.forEach(el => {
            el.style.display = 'block';
        })
        shadows.forEach(el => {
            el.style.boxShadow = '0 4px 12px #0000003d';
        })
         //   man.src = man.src.slice(0, -4) + '-Light.svg';
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
        DisplayNone.forEach(el => {
            el.style.display = 'none';
        })
        Display.forEach(el => {
            el.style.display = 'block';
        })
        shadows.forEach(el => {
            el.style.boxShadow = 'none';
        })
       // man.src = man.src.slice(0, -10) + '.svg';
    }
  });
});