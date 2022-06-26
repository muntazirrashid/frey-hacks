import mongoose from "mongoose";

const connectToDB = async () => mongoose.connect(process.env.NEXT_PUBLIC_DB!);

export default connectToDB;
