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
    async update ({ params, request }){
      const user = await User.findOrFail(params.id)
      const data = request.only([
        'id',
        'email',
        'password'
      ])
      user.merge(data)
    }

    async destroy({ params }){
      const user = await User.findOrFail(params.id)
      await user.delete()
    }
}

module.exports = UserController
