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
        try {
            client = await MongoClient.connect('mongodb+srv://anyadm:tw22d56f@cluster0.l3tew0h.mongodb.net/nextcgelevencompleteapp?retryWrites=true&w=majority')
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