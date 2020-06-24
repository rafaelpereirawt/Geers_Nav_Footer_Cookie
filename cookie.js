jQuery(document).ready(function () {
  var cookieName = 'wb-cookie'
  var cookieExpiryDays = 365
  var cookieValue = 'set'
  var wrapper = $('.ConsentWrapper')

  var setCookie = function() {
    const date = new Date()
    date.setTime(date.getTime() + (cookieExpiryDays * 24 * 60 * 60 * 1000))
    document.cookie = cookieName + '=' + cookieValue + '; expires=' + date.toUTCString() + '; path=/'
  }
  var cookieIsSet = function() {
    const nameEQ = cookieName + '='
    const ca = document.cookie.split(';')
    let c = null
    for (let i = 0; i < ca.length; i++) {
      c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0 && c.substring(nameEQ.length, c.length) === cookieValue) return true
    }
    return false
  }
  var collapseBanner = function () {
    wrapper.animate({ height: 0, padding: 0 }, 200, () => wrapper.addClass('is-hidden'))
  }

  if (cookieIsSet()) {
    setCookie()
    return
  }
  
  wrapper.show()

  $('.ConsentWrapper input').click(() => {
    collapseBanner()
    setCookie()
  })
});