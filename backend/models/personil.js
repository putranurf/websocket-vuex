'use strict';
module.exports = (sequelize, DataTypes) => {
  const personil = sequelize.define('personil', {
    npp: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    underscored: true,
  });
  personil.associate = function(models) {
    // associations can be defined here
  };
  return personil;
};