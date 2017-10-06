const
express = require('express'),
holidaysRouter = new express.Router(),
//..up 2 directories
holidaysCtrl = require('../controllers/videos.js')


// videosRouter.route('/')
// .get(videosCtrl.index)
// .get(videosCtrl.create)

// videosRouter.route('/:id')
// .get(videosCtrl.show)
// .get(videosCtrl.destroy)

videosRouter.get('/', holidaysCtrl.index)

videosRouter.post('/', holidaysCtrl.create)

videosRouter.get('/:id', holidaysCtrl.show)

videosRouter.delete('/:id', holidaysCtrl.destroy)

module.exports = holidaysRouter