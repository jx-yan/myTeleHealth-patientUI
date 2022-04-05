<h1 align="center">myTeleHealth - Patient</h1>

<p align="center">myTeleHealth Patient is the user interface for Doctors to access myTelehealth services</p>
 
# Getting Started
 
- Install [NodeJS](https://nodejs.org/en/) and [Docker](https://www.docker.com) before installing project

1. Download and unzip project
2. Run the following command on CMD in project directory

 ```sh
docker-compose up
npm install
npm run dev
```

## Frontend Frameworks and Libraries
- [Vite](https://vitejs.dev/guide)
- [Vue 3](https://staging.vuejs.org/guide/introduction.html)
- [Tailwind CSS](https://tailwindcss.com/docs/configuration)
- [Vue Router](https://github.com/vuejs/vue-router-next)
- [Vuex](https://vuex.vuejs.org)
- [Axios](https://axios-http.com/)
 
## Backend Frameworks and Libraries
- [Flask](https://flask.palletsprojects.com/en/2.1.x)
- [Express](https://expressjs.com/)
- [Node.JS](https://nodejs.org/en/)
- [Firebase](https://firebase.google.com/docs)
- [Pika](https://pika.readthedocs.io/en/stable)
- [Stripe](https://stripe.com/docs/api)

## Microservices
### Complex
- **Book Appointment** - Create new appointment after generating Zoom link
- **Make Payment** - Generate payment link, Process payment payload from Stripe, Update appointment status, send email with invoice and Zoom links to doctor and patient, redirect to payment success page
 
### Simple
- **Appointment** - Manage appointment data
- **Payment** - Generate payment link
- **Medical Record** - Manage medical record data
- **Zoom** - Generate online meeting links using Zoom API
- **Stripe** - Forward and listen to payment payload from Stripe Domain
- **Mail** - Generate and send email using Mailgun API
- **Doctor** - Manage profile data of doctors
- **Patient** - Manage profile data of patient
 
## Other Technologies
- Message Broker - [RabbitMQ](https://www.rabbitmq.com)
- Container Software - [Docker](https://www.docker.com)

## User Authentication
### Firebase Authentication:
- Used to facilitate user account creation and login via email/password provider and the creation of a unique user-id

## Data Storage
### Firebase Realtime Database
- A cloud-hosted NoSQL database
- Data is stored as JSON and synchronized in realtime to every connected client

## Beyond-The-Lab
- Handled Business Logic - Deconflict of appointment schedule
- Using NodeJS and ExpressJS for Zoom Microservice

## Authors and Acknowledgment
- Teo Wei Hern
- Yan Jiaxing
- Mohammad Zuhaili Bin Amin
- Xavier Ng
- Liew Yong Jiun
