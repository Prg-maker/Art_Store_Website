import 'dotenv/config'
import app from './index'

const server = app

server.listen(3001 , ()=> console.log('server is running'))