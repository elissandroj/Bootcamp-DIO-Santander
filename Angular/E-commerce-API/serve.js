const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
    origim: '/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
    console.log('Server Started!');
});

app.route('/api/products').get((request, response) => {
    response.send(PRODUCTS);
});

app.route('/api/offers').get((request, response) => {
    response.send(PRODUCTS.filter(item => item.oferta == true));
});
app.route('/api/products/filter/:min/:max').get((request, response) => {
    let min = request.params['min']
    let max = request.params['max']
    response.send(PRODUCTS.filter(item => item.price >= min && item.price <= max))

});

app.route('/api/products').post((request, response) => {
    let course = request.body;

    const firstId = PRODUCTS ? Math.max.apply(null, PRODUCTS.map(courseIterator => courseIterator.id)) + 1 : 1;
    course.id = firstId;
    PRODUCTS.push(course);


    response.status(201).send(course);
});
app.route('/api/products').post((request, response) => {
    let course = request.body;

    const firstId = PRODUCTS ? Math.max.apply(null, PRODUCTS.map(courseIterator => courseIterator.id)) + 1 : 1;
    course.id = firstId;
    PRODUCTS.push(course);


    response.status(201).send(course);
});

app.route('/api/products/:id').put((request, response) => {
    const courseId = +request.params['id'];
    const course = request.body;

    const index = PRODUCTS.findIndex(courseIterator => courseIterator.id === courseId);
    PRODUCTS[index] = course;

    response.status(200).send(course);
});

app.route('/api/products/:id').get((request, response) => {
    const courseId = +request.params['id'];

    response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/products/:id').delete((request, response) => {
    const courseId = +request.params['id'];
    PRODUCTS = PRODUCTS.filter(courseIterator => courseIterator.id !== courseId);

    response.status(204).send({});
});

var PRODUCTS = [
    {
        id: 1,
        name: 'Box Sherlock Holmes',
        price: 58.46,
        quantity: 200,
        category: 'Books',
        img: 'img1.jpg',
        oferta: false
    },
    {
        id: 2,
        name: 'Livro O mundo de Sofia',
        price: 44.03,
        quantity: 200,
        category: 'Books',
        img: 'img2.jpg',
        oferta: true
    },
    {
        id: 3,
        name: 'Livro Arsène Lupin',
        price: 45.50,
        quantity: 200,
        category: 'Books',
        img: 'img3.jpg',
        oferta: true
    },
    {
        id: 4,
        name: 'Folha sulfite',
        price: 18.40,
        quantity: 200,
        category: 'Papelary',
        img: 'img4.png',
        oferta: false
    },
    {
        id: 5,
        name: 'Caneta',
        price: 23.55,
        quantity: 200,
        category: 'Papelary',
        img: 'img5.png',
        oferta: true
    },

];