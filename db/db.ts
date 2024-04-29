import { MongoClient } from "mongodb";

MongoClient.connect(
  "mongodb+srv://Olim:Hugo2004**@cluster0.2qjo7tz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(client => {
    const db = client.db();

    db.collection('posts').insertOne({ age: 11 })
});