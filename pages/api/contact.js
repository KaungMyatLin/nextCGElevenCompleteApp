import { MongoClient } from 'mongodb';

// handler
const handler = async (req, res) => {
    if (req.method === "POST") {
        const {email, name, message} = req.body;

        if (!email || !email.includes('@') || !name || !name.trim()=== '' || !message || message.trim()=== '' ) {
            res.status(422).json({ message: 'invalid input'})
            return;
        }
        //connect to db here.
        let client
        const connStr = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.clustername}.l3tew0h.mongodb.net/${process.env.mongodb_database}}?retryWrites=true&w=majority`
        try {
            client = await MongoClient.connect('')
        }catch (err) {
            res.status(500).json({ message: 'could not connect to db'})
            return
        }

        const db = client.db()
        // format
        const newMessage = {
            email
            , name
            , message
        }
        try {
            const result = await db.collection('message').insertOne(newMessage)
            console.log(result)
            newMessage.id = result.insertedId
        }
        catch (err) {
            client.close()
            res.status(500).json({ message: 'storing message failed'})
            return ;
        }

        // response obj
        res.status(201).json({message: 'Successfully stored message', addedMessage: newMessage });
        console.log(newMessage)
    }
}

export default handler