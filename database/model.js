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

class Admin extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Admin.init(
  {
    adminId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      required: true,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      required: true,
    },
  },
  {
    modelName: "admin",
    sequelize: db,
  }
);

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      required: true,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(30),
      required: true,
      allowNull: false,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

class Order extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "admin",
    sequelize: db,
    timestamps: true,
    createdAt: true,
  }
);

//Relationships
User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });
Item.hasMany(Order, { foreignKey: "itemId" });
Order.belongsTo(Item, { foreignKey: "itemId" });

export { Item, Admin, User, Order };
