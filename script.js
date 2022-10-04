// `https://sarojkumar007.github.io/learn-shell/slides/`
const allSlides = [
`1.jpeg`,`2.jpeg`,`3.jpeg`,`4.jpeg`,`5.png`,`6.jpeg`,`7.png`,`8.png`,`9.jpeg`,`10.png`,
`11.png`,`12.png`,`13.jpeg`,`14.png`,`15.png`,`16.png`,`17.png`,`18.png`,`19.png`,`20.jpeg`,
`21.jpeg`,`22.png`,`23.jpeg`,`24.jpeg`,`25.jpeg`,`26.jpeg`,`27.png`,`28.jpeg`,`29.jpeg`,`30.jpeg`,
`31.jpeg`,`32.jpeg`,`33.jpeg`,`34.png`,`35.png`,`36.png`,`37.jpeg`,`38.jpeg`,`39.jpeg`,`40.jpeg`,
`41.jpeg`,`42.jpeg`,`43.jpeg`,`44.jpeg`,`45.jpeg`,`46.png`,`47.png`,`48.jpeg`,`49.jpeg`,`50.jpeg`,
`51.jpeg`,`52.jpeg`,`53.jpeg`,`54.png`,`55.jpeg`,`56.jpeg`,`57.png`,`58.jpeg`,`59.jpeg`,`60.png`,
`61.jpeg`,`62.jpeg`,`63.png`,`64.jpeg`,`65.png`,`66.jpeg`,`67.png`,
]

function changePage(pg){
  window.history.pushState('','',`?page=${pg}`)
  const activeItems = document.querySelectorAll('#sidebar_list li.active')
  activeItems.forEach(item => item.classList.remove('active'))
  document.querySelector(`#sidebar_list li[data-page="${pg}"]`).classList.add('active')

  document.querySelector('#page_heading').innerText = `Page ${pg}`
  const slide = document.querySelector('#current_slide')
  slide.src = `slides/`+ allSlides[pg-1]
  slide.alt = pg
}

window.onload = function() {
  // load sidebar pages
  let sideBarHTML = ``
  for (var i = 0; i < allSlides.length; i++) {
    sideBarHTML += `<li data-page="${i+1}">Page ${i+1}</li>`
  }
  document.querySelector('#sidebar_list').innerHTML = sideBarHTML
  // attch event listeners
  document.querySelectorAll('#sidebar_list li').forEach(item => {
    item.addEventListener('click',()=>{
      changePage(item.dataset.page)
    })
  })


  // initial
  const q = new URLSearchParams(location.search)
  const currPage = q.get('page')
  changePage(currPage || 1)
}

document.querySelector('#toggle_sidebar').addEventListener('click',()=>{
  document.querySelector('#menu').classList.toggle('hidden')
  document.querySelector('#menu_open').classList.toggle('hidden')

  if(document.querySelector('#menu').classList.contains('hidden')){
    console.log('Open')
    document.querySelector('.side-bar').classList.add('active')
  }else{
    console.log('Close')
    document.querySelector('.side-bar').classList.remove('active')
  }
})
