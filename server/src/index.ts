import express from 'express'
import * as swagger from 'swagger-ui-express'
import * as swaggerDocs from './swagger.json';

const app = express()
const PORT = 5555;

app.get('/', (req, res) => res.send('Surver is responding back from /'))

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs))

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})