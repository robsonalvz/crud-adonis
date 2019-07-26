'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User');
Route.put('users', 'UserController.update').validator('User').middleware('auth');;
Route.delete('users', 'UserController.destroy').middleware('auth');;

Route.get('users', 'UserController.index').middleware('auth');

Route.post('sessions', 'SessionController.store').validator('Session');

Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')

Route.get('/files/:id', 'FileController.show')
Route.post('/files', 'FileController.store')
