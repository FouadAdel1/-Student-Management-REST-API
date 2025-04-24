const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  id: String,

}
)

mongoose.model('users', userSchema);