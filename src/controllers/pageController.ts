import { Request, Response } from "express";

const home = (req: Request, res: Response) => {
    res.send('Em construçaõ')
};
const dogs = (req: Request, res: Response) => {};
const cats = (req: Request, res: Response) => {};
const fishes = (req: Request, res: Response) => {};

export default {
  home,
  dogs,
  cats,
  fishes,
};
