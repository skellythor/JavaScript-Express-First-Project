
/**
 em java por exemplo

string express = "hello world"

  console.log(java)
 */

  const express = require("express")
  const app = express()
  const port = 4000
  
  app.use(express.static('src'))
  
  app.listen(port, () =>{
      console.log(`Servidor está rodando na porta ${port}`)
  })

  