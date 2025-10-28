// Express is used for CRUD methods and API calls
const express = require("express");
const app = express();

// Setting the port for the server to 2001
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// Initializing the persons array
let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

// This is the base route which just prints hello world
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

// Calls all of the objects in persons
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// Variable to get the current date
const currentTime = new Date()

// Route used to display how man people are in the phonebook
// The backticks allow for us to dynamically add variables from the rest of the JS file
app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people
    </p>
    <p>
    ${currentTime}</p>`
    )
})

// Fetching person by specific IDs
app.get('/api/persons/:id', (request, response) => {
    console.log("are we getting here")
    // We had to make the request.params.id into a string because in the array that persons is declared in, the ids are also listed as strings
    const id = String(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

// Deleting person by ID
app.delete('/api/persons/:id', (request, response) => {
    const id = String(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

// Generating a new ID for when something is added to the phonebook
const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(n => Number(n.id)))
        : 0
    return String(maxId + 1)
}

// Posting a new person to the phonebook
app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const person = {
        content: body.content,
        important: body.important || false,
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)
})