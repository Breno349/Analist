const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');

const app = express();
const port = 3000;

// Rota para pegar o conteúdo do site e salvar no diretório / do site local
app.get('/', async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://internetgratis.vivo.com.br'); // URL do site que você deseja pegar o conteúdo

        const content = await page.content(); // Obtém o conteúdo da página
        res.send(content)
        await browser.close();
    } catch (Exception e){
      console.log("Erro"+e)
    }
});

app.listen(port, () => {
    console.log(`Servidor Express rodando na porta ${port}`);
});
