import {fastify} from 'fastify'
import { DataBaseMemory } from './data_base.js'

const servidor = fastify()
const database = new DataBaseMemory()

servidor.post('/videos', (request, reply) => {
    const {title, description, duration}  = request.body
    consolelog(body)
    database.create({
        title: title, 
        description: description, 
        duration: duration, 
    })

    console.log(database.list)
    return reply.status(201).send()
})

servidor.get('/videos', (request,  reply) => {
    const videos = database.list

    console.log(videos)

    return videos
} )

servidor.put( '/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const {title, description, duration}  = request.body
    const video = database.update(videoId, {
        title,
        description,
        duration,
    })
    return reply.status(204).send()
})

servidor.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    database.delete(videoId)
    return reply.status(200).send()
})

servidor.listen({
    port: 5555,
})
