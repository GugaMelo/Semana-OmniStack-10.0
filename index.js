const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/omni', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json()); // para que todos os metodos entendam o formato json dentro do express

// Métodos http: get, post, put, delete

// Tipos de parâmetros:
//  - Query Psrams: req.query (filtros, ordenação, paginação,...)
//  - Route Params: req.params (identificar recurso na alteração ou remoção)
//  - Body: req.body (dados para criação ou alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({massage: 'Hello World'});
});

// MongoDB (Não-Relacional)
// MySQL (Relacional)

app.listen(3333);