import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import util from "util";

export const db = await connectToDB(`postgresql:///catmontoya`);

class Item extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Item.init(
  {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    picture: {
      type: DataTypes.TEXT,
    },
    itemName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "item",
    sequelize: db,
  }
);

export { Item };
