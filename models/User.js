const { getDb } = require('../configs/mongoConnection');
const { ObjectId } = require('mongodb');

class User {
  static async findAll() {
    try {
      const db = getDb()

      const data = await db.collection('users').find().toArray()

      return data
    } catch (error) {
      console.log(error);
    }
  }

  static async findById(id) {
    try {

      const db = getDb()

      const data = await db.collection('users').findOne({
        _id: new ObjectId(id)
      })

      return data
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = User