import { Router } from './router.js'

const router = new Router()
router.add('/home', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/explore', './pages/explore.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
window.information = () => router.information()