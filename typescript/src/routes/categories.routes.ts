import { Router } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).end();
});

categoriesRoutes.get("/", (_, res) => {
  const allCategories = categoriesRepository.list();

  return res.status(200).send(allCategories);
});

export { categoriesRoutes };
