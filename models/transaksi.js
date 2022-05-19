'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.member,{
        foreignKey: "id_member",
        as: "member"
      }),
      this.hasMany(models.detail_transaksi,{
        foreignKey: "id_transaksi",
        as: "detail_transaksi"
      }),
      this.belongsTo(models.outlet,{
        foreignKey: "id_outlet",
        as: "outlet"
      }),
      this.belongsTo(models.user,{
        foreignKey: "id_user",
        as: "user"
      })
    }
  }
  transaksi.init({
    id_outlet: DataTypes.INTEGER,
    kode_invoice: DataTypes.STRING,
    id_member: DataTypes.INTEGER,
    tgl: DataTypes.DATE,
    batas_waktu: DataTypes.DATE,
    tgl_bayar: DataTypes.DATE,
    biaya_tambahan: DataTypes.INTEGER,
    diskon: DataTypes.DOUBLE,
    pajak: DataTypes.INTEGER,
    status: DataTypes.ENUM('baru','proses','selesai','diambil'),
    dibayar: DataTypes.ENUM('dibayar','belum_dibayar'),
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'transaksi',
    modelName: 'transaksi',
  });
  return transaksi;
};