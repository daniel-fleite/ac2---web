import express from 'express'
import router from './routes/appRoutes.js'

const app = express ()
const port = 3000

app.use(express.json())

app.use('/professores', router)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})