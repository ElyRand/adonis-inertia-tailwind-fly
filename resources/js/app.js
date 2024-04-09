console.log('Log from JS entrypoint')
import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

import 'htmx.org'

Alpine.plugin(collapse)
Alpine.start()
window.Alpine = Alpine
