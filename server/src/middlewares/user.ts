import jwt from "jsonwebtoken";
import User from "../entities/User";
import { NextFunction, Response, Request } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) return next();

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findOneBy({ username });

    res.locals.user = user;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "something went wrong" });
  }
};
