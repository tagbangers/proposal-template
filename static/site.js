const $nav = $('#nav')
const $main = $('main')

window.addEventListener(
  'hashchange',
  function (ev) {
    const hash = ev.target.location.hash
    console.log(hash)
  },
  false
)

$('#nav-switch').on('click', () => {
  $main.toggleClass('with-index')
})
