const { MongoDBContainer } = require('../../persistence/containers/MongoDBContainer')

class UserDaoMongoDB extends MongoDBContainer {

    constructor() {
        super('users', {
            //id: { type: Date, required: true },
            surname: { type: String, required: true },
            name: { type: String, required: true },
            username: { type: String, required: true },
            password: { type: String, required: true },
            cellphone: { type: String, required: true },
            photoURL: { type: String, required: true }
        })
        if (typeof UserDaoMongoDB.instance === 'object') {
            return UserDaoMongoDB.instance;
          }
          UserDaoMongoDB.instance = this;
          return this;
    }
}

module.exports = { UserDaoMongoDB }