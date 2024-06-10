const mongoose = require ('mongoose')
const uri = "mongodb+srv://PIanimo:Pianoboi060328@cluster0.ok3w3yu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Sodagram.Accounts";


mongoose.Promise = global.Promise;


before( (done) => {
  async function connect(){
    try{
      await mongoose.connect(uri);
      console.log("Successful connection to MongoDB");
      done();
    }catch (error){
      console.log(error);
    }
  }

  connect();
})

beforeEach((done) =>{
    mongoose.connection.collections.accountdatas.drop(() => {
        done();
    });
})