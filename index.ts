import * as http from "http";
import {StringDecoder} from "string_decoder"
import * as fs from "fs"

const decoder = new StringDecoder('utf-8');

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.end();
  
  req.on('data', (data)=>{
    const d = decoder.write(data);
    const json_data = JSON.parse(d);
    fs.writeFileSync('test.json', JSON.stringify(json_data, null, "\t"));
    
  })
});

server.listen(3000, ()=>{
  console.log("server listening!");
})