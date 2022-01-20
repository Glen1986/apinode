//const express =  require('express');
const http = require('http');

let notes =[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat ",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }
]
const app = http.createServer((req, res) =>{  
  res.writeHead(200,{'Content-type': 'application/json'})
  res.end(JSON.stringify(notes))
})
const PORT = 3001
app.listen(PORT)
console.log(`server running ${PORT}`)
