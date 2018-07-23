import {ReactInstance, Location, Surface} from 'react-360-web';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createAvocado(r360) {

  let z = -25
  let x = getRandomInt(-2, 2)
  let y = getRandomInt(-2, 2)

  const location = new Location([x, y, z])

  const interval = setInterval(() => {
    // console.log('aupa', z)
    z = z + 0.25
    location.setWorldPosition(x, y, z)
    if (z > 10) {
      clearInterval(interval)
      createAvocado(r360)
    }
    // if (z > -20) {
    //   clearInterval(interval)
    //   createAvocado(r360)
    // }
  }, 100)



  r360.renderToLocation(
    r360.createRoot('ModelView'),
    location,
  );

}

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  createAvocado(r360)

  r360.compositor.setBackground('./static_assets/360_world.jpg');
}

window.React360 = {init};