import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessages = async (req, res) => {
    try{
          const {id:reciever_id}=req.params;
          const {message}=req.body;
          const sender_id=req.user._id;

            let conversation=await Conversation.findOne({
                participants:[sender_id,reciever_id]
            });

            if(!conversation){
                conversation = await Conversation.create({
                    participants:[sender_id,reciever_id]
                })
            }

            const newMessage = new Message({
                sender_id,
                reciever_id,
                message
            }); 

            if(newMessage){
                conversation.messages.push(newMessage._id)
            }
            await Promise.all([conversation.save(), newMessage.save()]);
            res.status(201).json(newMessage);
    }
    catch(error){
        console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try{
        const {id:userToChat}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{ $all: [senderId, userToChat] }
        }).populate("messages");

        if(!conversation){
            res.staus(200).json([]);
        }
        res.status(200).json(conversation.messages);
        
    }
    catch(error){
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}