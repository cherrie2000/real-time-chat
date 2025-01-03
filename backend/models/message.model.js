import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender_id:{
         type:mongoose.Schema.Types.ObjectId,
         refs: "User",
         required:true
    },
    reciever_id:{
        type:mongoose.Schema.Types.ObjectId,
        refs: "User",
        required:true
    },
    message:{
        type:String,
        required:true
        
    }
}, {timestamp:true});
const Message = mongoose.model('Message', messageSchema);
export default Message;
