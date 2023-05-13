const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
  response.sendFile(__dirname + "/index2.html");
});
app.post("/",function(request,response){
  var num1=Number(request.body.num1);
  var num2=Number(request.body.num2);
  const operator=request.body.operator;
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      response.status(400).send("Invalid operator");
      return;
    }
    response.send(`Result: ${result}`);
});

app.listen(3000,function(){
  console.log("server is running on port number 3000");
});
