import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDb = async () =>{

    if(db) return db;
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    try {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            },
        });
        db = client.db('yogaDB');
        return db;
    } catch (error) {
        console.log(error);
      }
}