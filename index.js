const puppeteer = require("puppeteer-core")
/*const express = require('express')
const app = express()

app.get("/", (req, res) => {
  
})

app.listen(8000,() => {
  console.log("Servidor Iniciado...")
})*/

async function startPu(){
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox"
    ]
  });
}

startPu()
