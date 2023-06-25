module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("appointments", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.STRING
      },
      endTime: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
    });
    return Appointment;
  };
