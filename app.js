/* Incluir a dependência express no prjeto */
const express = require('express');

/* Iniciar a função do express */
const app = express();

/* Permitir a manipulação de dados em formato JSON */
app.use(express.json());

/* Criar a rota raiz */
app.get("/lista", (req, res) => {
    return res.json({titulo: "Como criar API"});
});

/* Rodar o projeto na porta 8080 */
app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/lista");
});