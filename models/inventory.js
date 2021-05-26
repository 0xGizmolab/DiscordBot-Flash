const { model, Schema } = require('mongoose');

module.exports = model('inventory', new Schema({
    User: String,
    Inventory: Object,
})
);