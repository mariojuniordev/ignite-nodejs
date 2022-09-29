import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

  handle(res: Response): Response {
    const categories = this.listCategoryUseCase.execute();

    return res.status(200).send(categories);
  }
}

export { ListCategoriesController };
