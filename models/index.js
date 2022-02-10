const Category = require("./Category");
const Item = require("./Item");
const User = require("./User");

Category.hasMany(Item, {
  foreignKey: "category_id",
});

Item.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

User.hasMany(Item, {
  foreignKey: "user_id",
});

Item.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = { Category, Item, User };
