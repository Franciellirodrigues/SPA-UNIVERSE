export class Router {
    routes = {}
  
    add(routeName, page) {
      this.routes[routeName] = page
    }
  
    route(event) {
      event = event || window.event
      console.log(event)
      event.preventDefault() // quebra padrão de redirecionamento.
  
      window.history.pushState({}, '', event.target.href)
  
      this.handle()
    }
  
    handle() {
      const { pathname } = window.location
      const route = this.routes[pathname] || this.routes['/home']
  
      console.log(pathname)
  
      fetch(route)
        .then(data => data.text())
        .then(html => {
          document.querySelector('#app').innerHTML = html
        })
  
      this.backgroundColor(pathname)
    }
  
    controlHome() {
      document.body.classList.add('home')
      document.body.classList.remove('universe')
      document.body.classList.remove('explore')
      document.querySelector('.linkHome').classList.add('hide')
      document.querySelector('.linkUniverse').classList.remove('hide')
      document.querySelector('.linkExplore').classList.remove('hide')
    }
  
    controlUniverse() {
      document.body.classList.add('universe')
      document.body.classList.remove('home')
      document.body.classList.remove('explore')
  
      document.querySelector('.linkUniverse').classList.add('hide')
      document.querySelector('.linkExplore').classList.remove('hide')
      document.querySelector('.linkHome').classList.remove('hide')
    }
  
    controlExplore() {
      document.body.classList.add('universe')
      document.body.classList.remove('home')
      document.body.classList.remove('explore')
  
      document.querySelector('.linkExplore').classList.add('hide')
      document.querySelector('.linkUniverse').classList.remove('hide')
      document.querySelector('.linkHome').classList.remove('hide')
    }
  
    backgroundColor(pagColor) {
      if (pagColor == '/home') {
        this.controlHome()
      } else if (pagColor == '/universe') {
        this.controlUniverse()
      } else if (pagColor == '/explore') {
        this.controlExplore()
      }
    }
  
    information() {
      window.location.pathname = '/universe'
      /*      const route = this.routes["/universe"]
        fetch(route)
        .then((data) => data.text())
        .then( html => {
          document.querySelector("#app").innerHTML = html
        })  
        window.location.pathname = "/universe" 
         this.controlUniverse()
        */
    }
  }