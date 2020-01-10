module.exports = (sequelize, DataTypes) => {
  const personas = sequelize.define('personas', {
    id: {
      type: DataTypes.INTEGER,
      AllowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    slug: {
      type: DataTypes.STRING,
      AllowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      AllowNull: false,
      unique: true
    },
    arcana: {
      type: DataTypes.STRING,
      AllowNull: false
    },
    base_level: {
      type: DataTypes.INTEGER,
      AllowNull: false
    }
  }, {
    timestamps: false
  });

  return personas;
};
