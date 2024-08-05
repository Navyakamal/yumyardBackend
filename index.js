const json_server=require('json-server')
const cors=require('cors')

const server=json_server.create()
const middleware=json_server.defaults()
const routes=json_server.router('data.json')

server.use(cors())
server.use(middleware)
server.use(routes)

const PORT=8000
server.listen(PORT,()=>{
    console.log(`Server started running at Port ${PORT} `);
})