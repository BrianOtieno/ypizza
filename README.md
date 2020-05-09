[![Test Coverage](https://api.codeclimate.com/v1/badges/0ec0dddbc8a1de13ea1e/test_coverage)](https://codeclimate.com/github/BrianOtieno/ypizza/test_coverage)

[![Maintainability](https://api.codeclimate.com/v1/badges/0ec0dddbc8a1de13ea1e/maintainability)](https://codeclimate.com/github/BrianOtieno/ypizza/maintainability)

# YUMMI PIZZA

### What it Does
Yummi pizza is an applicaton that lets clients make pizza orders.<br/>

## API
[To add collection link for Rest Client]

### Set up local environment
This platform APIs is built on lumen, a PHP-Laravel framework. You should have composer installed. 

Clone the repository
```sh
https://github.com/BrianOtieno/ypizza.git
```

Change directory into ypizza then again, into api directory.
 

```sh
cd ypizza/api
```
Install all the dependancies.
```sh
composer install
```
 ### Run the application

Run applicatioin on specified port eg. 3000

```sh
php -S localhost:3000 -t public
```

```
### APIs Endpoints

**`GET "/api/"`** *home page*

**`POST /api/v1/orders/register`**    *Register user. Takes in a json object with keys as name, username,password,confirm_password,email*

**`POST  /api/v1/login`**  *Login. Takes in a json object with keys as username and password*

**`POST /api/v1/orders`** *New Order. Takes in a json object with order details and commit to remote DB*

**`GET  /api/v1/orders`** *Get all orders requested by the client*

**`GET /api/v1/view_order/<int:order_id>`** *Get an order with corresponding order ID*

**`PUT /api/v1/orders/<int:entryId>`** *Update an order.*

**`DELETE /api/v1/orders/delete/<int:entryId>`** *Delete an order by the corresponding ID*
 
**`GET /api/v1/logout`** *Gets user on session out of session*

Check it on Heroku: [To add link]

## WEB