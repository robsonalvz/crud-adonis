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
}

module.exports = UserController
