import { Category } from "../../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  // SINGLETON - Padrão usado para fazer a classe retornar uma única instância de si mesma

  private static INSTANCE: CategoriesRepository;

  // constructor é um método q é chamado quando a classe é instaciada
  private constructor() {
    this.categories = [];
  }

  // getInstance() - Método que vai verificar se a classe já foi instanciada, caso
  // já tenha sido instaciada será usada a instância já existente

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
