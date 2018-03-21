// unregister serviceWorker
;(function () {
  'use strict'
  window.addEventListener('load', function () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('service-worker.js')
        .then(function (registration) {
          // registration worked
          console.log('Registration succeeded.')
          registration.unregister().then(function (boolean) {
            // if boolean = true, unregister is successful
            console.log('service worker unregister ? ', boolean)
          })
        })
        .catch(function (error) {
          // registration failed
          console.log('Registration failed with ' + error)
        })
    }
  })
})()
