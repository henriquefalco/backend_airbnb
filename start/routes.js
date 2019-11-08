'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

//Index Route
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Create User
Route.post('/users', 'UserController.create')

//Make login, return = Token
Route.post('/sessions', 'SessionController.create')

//Routes from Property functions
Route.resource('properties', 'PropertyController').apiOnly().middleware('auth')

//Routes from Property Images
Route.post('properties/:id/images', 'ImageController.store').middleware('auth')

//Routes to show images 
Route.get('images/:path', 'ImageController.show')