import express from 'express'

const app = express()
const PORT = 5555;

app.get('/', (req, res) => res.send('Surver is responding back from /'))

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})