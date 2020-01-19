module.exports = (sequelize,DataTypes) => {
    return sequelize.define("tb_user", {
      userId: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
      },
      userPassword: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: false
      },
      userNm: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false
      },
      userBirth : {
        type: DataTypes.STRING(50),
        allowNull : true,
        unique : false,
      }
    });
};
