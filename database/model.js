// import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
// import util from "util";

export const db = await connectToDB(`postgresql:///catmontoya`);
