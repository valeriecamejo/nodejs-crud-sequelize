const { find, findById, create, update, erase } = require('../helpers/crud');
const UserModel = require('../models/User');

exports.getUsers = async (req, res) => {
  try {
    const users = await find(UserModel);
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findById(UserModel, id);
    res.json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createUser = async (req, res) =>{
  try {
    const user = await create(UserModel, req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateUser = async (req, res) =>{
  try {
    const { id } = req.params;
    const user = await update(UserModel, req.body, id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDeleted = await erase(UserModel, id);
    res.send(userDeleted);
  } catch (error) {
    res.status(400).send(error);
  }
};
