import * as http from "http";

const options: http.RequestOptions  = {
  hostname: '192.168.11.63',
  port: 3000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
}

const send_data = {
  message: "Hello, hogehoge",
  id: 123
};

const req = http.request(options);
req.write(JSON.stringify(send_data));