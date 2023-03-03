import { createServer } from 'http'
import { app } from './src/app.js'

const port = process.env.PORT || 8000
const server = createServer(app)
server.listen(port, ()=> console.log(`server running on ${port} port`))