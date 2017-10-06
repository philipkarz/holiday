const
express = require('express'),
holidaysRouter = new express.Router(),

holidaysCtrl = require('../controllers/videos.js')


videosRouter.get('/', holidaysCtrl.index)

videosRouter.post('/', holidaysCtrl.create)

videosRouter.get('/:id', holidaysCtrl.show)

videosRouter.delete('/:id', holidaysCtrl.destroy)

module.exports = holidaysRouter