import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://Thunder-tech-admin:RLG826uZjfqzS3zI@cluster0.jor48.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const productCollection = client.db("Thunder-Tech").collection('products');

        if (req.method === 'GET' && req.params) {
            // Check if an _id parameter is provided in the request
            const { id } = req.params;
            const product = await productCollection.findOne({ _id: id })
            console.log(product)
            res.send({ message: 'success', status: 200, data: product })
        }

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
export default run


// Thunder-tech-admin
// RLG826uZjfqzS3zI