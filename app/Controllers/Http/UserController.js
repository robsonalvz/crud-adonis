'use strict'
const User = use('App/Models/User')

class UserController {
    async index({ request }){
        const users = await User.all()
        return users
    }

    async store ({ request }) {
        const data = request.only(['username', 'email', 'password'])

        const user = await User.create(data)

        return user
    }
    async update ({ auth, request, response }){
      try{
        await auth.check()
        const data = request.only(['id','username', 'email', 'password'])
        const user = await User.create(data)
        return user
      }catch(err){
        return response.status(err.status)
      }

    }

    async destroy({ request }){

    }
}

module.exports = UserController
