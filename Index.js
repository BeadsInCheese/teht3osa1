

  
  const express = require('express')
  const app = express()
  
  const http = require('http')
  let numbers = [
      {
          name: "Arto Hellas",
          number: '040-123456',
          id: '1'
      },
      {
          name: "Martti Tienari",
          number: '040-123456',
          id: '2'
      },
      {
        name: "Arto Järvinen",
        number: '040-123456',
        id: '3'
      },
      {
          
        name: "Lea Kutvonen",
        number: '040-123456',
        id: '4'
      }
    ]
  
    
  
  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
  app.get('/persons', (req, res) => {
    res.json(numbers)
  })
  app.get('/persons/:id', (request, response) => {
    const id = request.params.id
    const number = numbers.find(number => number.id === id )
    response.json(number)
  })
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })