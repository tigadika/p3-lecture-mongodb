const User = require("../models/User");


module.exports = class Controller {
  static async findAll(req, res) {
    try {
      const response = await User.findAll()

      res.json(response)

    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Internal Server Error' })
    }
  }

  static async findOne(req, res) {
    try {
      const { id } = req.params

      const response = await User.findById(id)

      res.json(response)

    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Internal Server Error' })
    }
  }
}
