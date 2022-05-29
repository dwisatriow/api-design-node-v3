import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

app.use('/api', router)

/**
 * Custom middleware
 */
// const log = (req, res, next) => {
//   console.log('logging')
//   next()
// }

/**
 * Get started
 */
// app.get('/', (req, res) => {
//   res.send({ message: 'hello' })
// })

// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send({ message: 'ok' })
// })

/**
 * Setup routes
 */
app.get('/data', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('listening on port 3000')
  })
}
