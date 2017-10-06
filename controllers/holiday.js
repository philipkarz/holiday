const
Holiday = require('../models/Holiday.js')



module.exports = {
index: (req, res) => {
    Holiday.find({}, (err, holidays) => {
        if (err) return console.log(err)
        res.json(holidays)
    })
},
show: (req, res) => {
    Holiday.find(req.params.id, (err, holiday) => {
        if (err) return console.log(err)
        res.json(holiday)
    })
}, 
create: (req, res) => {
    var newHoliday = new Holiday(req.body)
    newHoliday.save((err, newHoliday) => {
        if (err) return console.log(err)
        res.json({success: true, message: "New holiday created", new: newHoliday})
    })
},
update: (req, res) => {
    Holiday.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedHoliday) => {
        if(err) return console.log(err)
        res.json({success: true, message: "update successful", updated: updatedHoliday})
    })
}, 
destroy: (req, res) => {
    Holiday.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
        if (err) return console.log(err)
        res.json({success: true, message: "Deleted successfully", deleted: deletedHoliday})
    })
}
}