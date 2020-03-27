const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
Métodos HTTP:
*GET: Buscar/listar uma informção no back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: deletar uma informação no back-end
*/

/*
Tipos de parâmetros:

*QUERY PARAMS: Parâmetros nomeados eviados na rota após "?" (filtros, paginação)
*ROUTE PARAMS: Parâmetros utilizados para identificar recursos
*REQUEST BODY: corpo da requisição, utilizado para criar ou alterar recursos
*/