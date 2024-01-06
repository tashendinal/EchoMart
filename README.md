# EchoMart

> Build EchoMart Web App By Using MERN Stack



## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```
** If you want you can change your port number as you needed. Also add your MongoDb url (MongoDb Atles or Mongodb Compass). **

### Install Dependencies (frontend & backend)

```
cd backend
npm install
cd frontend
npm install
```
### Run
```
# Run frontend (:3001) & backend (:5000)
npm start

# Run backend only
npm start
```


