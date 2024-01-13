//import { createServer } from 'node:http' 

// const server = createServer((request, response) => {
    //Response.write('hello word')

    //return response.end
//})

//server.listen(4444)



import {fastify} from 'fastify'

import { DataBaseMemory } from './data_base.js'

const servidor = fastify()

const database = new DataBaseMemory()

servidor.post('/videos', (request, reply) => {
    database.create({
        title: 'Video 01', 
        description: 'esse é o vídeo 01', 
        duration: '180', 
    })

    console.log(database.list)

    return reply.status(201).send()

})
servidor.get('/videos', () => {
    return ' e ai, voce chamou os videos.'
} ) 



servidor.put( '/videos/:id', () => {
    return 'qual foi meu truta? voce chamou a segunda versao do servidor'
})



servidor.delete('/videos/:id', () => {
    return 'olá node.js'
})


servidor.listen({
    port: 5555,
})