const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  //use populate to call on ref category
  price: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = itemSchema;