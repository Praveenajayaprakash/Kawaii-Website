const express = require ('express')
const cors =require('cors')
const jwt=require('jsonwebtoken');
const  bcrypt=require('bcryptjs');
const app = express();
const port =6001;
app.use (cors());
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('hi iam ');
// }) 

const users = [];  // To store no of users

const secretKey = 'your-secret-key';
app.post('/register',async(req,res)=>{
    const {username,password}=req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    users.push({username,password:hashedPassword});
    res.sendStatus(201);
    console.log("User registered Successfully")
})
app.post('/login',async(req,res)=>{
    const {username,password}=req.body;

    const user=users.find((us)=>us.username===username)

    if(user){
       const isValiduser=await bcrypt.compare(password,user.password,);
       if(isValiduser){
            const token=await jwt.sign({username},secretKey,{expiresIn:'1hr'})
            res.json({ token });
            console.log("login Successfully");
       }
       else{
            res.status(401).json({message:'Invalid Credential,since Password Does not match'})
       }

    }else{
      res.status(401).json({message:'Invalid Credential,since User Not Found,SignUp to Login plz'})
    }
})



const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://praviipravii7:LSQdy00UM8vtFx4Z@cluster0.qpvyubh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const dolls=client.db("kawaii").collection("dolls");

    app.post("/upload",async(req,res)=>{
        const data=req.body;
        const result=await dolls.insertOne(data);
        res.send(result);
    })
    
    app.get("/sns",async(req,res)=>{
        const foods=dolls.find();
        const result=await foods.toArray();
        res.send(result);
    })

    app.get("/snsbyid/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await dolls.findOne(filter);
      res.send(result);
    })
    
    app.patch("/allproductsnacks:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};

        const result=await dolls.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/deletesnack/:id',async(req,res)=>{
        const id=req.params.id;
        console.log(id)
        const filter={_id:new ObjectId(id)};
        const result=await dolls.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })

    const hats=client.db("kawaii").collection("hats");

    app.post("/uploadhats",async(req,res)=>{
        const data=req.body;
        const result=await hats.insertOne(data);
        res.send(result);
    })
    
    app.get("/snshat",async(req,res)=>{
        const foods=hats.find();
        const result=await foods.toArray();
        res.send(result);
    })

    app.get("/snsbyidhats/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await hats.findOne(filter);
      res.send(result);
    })
    
    app.patch("/allproducthats/:id",async(req,res)=>{
      
        const id=req.params.id;
        const updateFooddata=req.body;
        const filter={_id:new ObjectId(id)};

        const updateDoc={
            $set:{
                ...updateFooddata
            },
        }
        const options ={upsert:true};

        const result=await hats.updateOne(filter,updateDoc,options);
        res.send(result);
    })

    app.delete('/deletehats/:id',async(req,res)=>{
        const id=req.params.id;
        console.log(id)
        const filter={_id:new ObjectId(id)};
        const result=await hats.deleteOne(filter);
        res.status(200).json({success:true , message:"data deleted successfully", result});
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen (port, ()=>{
    console.log(`conected to ${port}`)
}
)
