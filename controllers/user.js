module.exports = class Controller {
  static async findAll(req, res) {
    try {

      res.json({ message: 'find all' })

    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Internal Server Error' })
    }
  }

  static async findOne(req, res) {
    try {

      res.json({ message: 'find one' })

    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Internal Server Error' })
    }
  }
}
