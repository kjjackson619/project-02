const Category = require("./Category");
const Item = require("./Item");
const User_Table = require("./User_Table");

Category.hasMany(Item, {
  foreignKey: "category_id",
});

Item.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

module.exports = { Category, Item, User_Table };
