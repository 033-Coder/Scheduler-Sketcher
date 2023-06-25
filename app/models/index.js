const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize
};

db.appointment = require("./appointment.js")(sequelize, Sequelize);
db.user = require("./user.js")(sequelize, Sequelize);

db.user.hasMany(db.appointment, { as: "appointments" })
db.appointment.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
}); 

module.exports = db;