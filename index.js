const { json } = require("body-parser");
const express = require("express");
requiere('dotenv').confif();
const bodyparser = requiere ("body-parser");
const aws = requiere ('aws-sdk');
const app =express();
const s3 = new aws.s3 ();
app.use(bodyparser.urlencoded({ extended: true}));

app.get("/",(req,res)=>{
    res.sendfile(__dirname + "/inde.html");

});

app.get("/health",(req,res)=>{
    res.status(200).send('service runing ok.')

});
app.post("/student",(req,res)=>{
    const data = json.stringify(req.body);
    const params = {
        bucket : process.eny.bucket,
        key: $(req.body.name).json,
        body : data
    }

});

s3.upload(params,(err, data)=>{
    if(err){
        console.error(err);
        res.status(500).send('Error saving data to s3: $(JSON.stringify(err)}');
    } else{
        console.log(data saved to s3: ${JSON.stringify(data.Location)});
        res.send(Data saved to s3 review the aws console:${JSON.stringify(data)});
    }
});

app.listen(process.eny.PORT || 3000,function() {
    console.log("server  is running on 3000");
});
    
    
    

