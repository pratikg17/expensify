import User from "./../models/user.model.js";

export const search = async (filter) => {
  const promise = User.find(filter).exec();
  return promise;
};

// get the User list
export const get = async (id) => {
  const promise = await User.findById(id).exec();
  return promise;
};

// get the User list
export const findByEmail = async (email) => {
  let user = await User.findOne({
    email: email,
  });
  return user;
};

// Create new User
export const create = async (newUser) => {
  const user = new User(newUser);
  return user.save();
};

// Update the User
export const update = async (id, updatedUser) => {
  const user = await User.findByIdAndUpdate({ _id: id }, updatedUser, {
    new: true,
  }).exec();
  return user;
};

// Delete the User
export const remove = async (id) => {
  const remove = await User.remove({ _id: id }).exec();
  return remove;
};
