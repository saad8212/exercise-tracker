const mongoose = require("mongoose");
let activitySchema = new mongoose.Schema({
  name: {
    type:String,
  },
  description: {
    type:String,
    required: true,
  },
  type:{
    type:String,
    required: true,
  } ,
  duration:{
    type:String,
    required: true,
  } ,
  date:{
    type:String,
  },
  userId:{
    type:String,
  },
});
const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
