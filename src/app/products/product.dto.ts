import { Product } from './product.model';

//Omit se usa para excluir campos que no se requieran al heredar un type
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Pick se usa para seleccionar los tipos que se requiera heredar
type pickExample = Pick<Product, 'description' | 'color' | 'price'>;


// Partial hace que todos lostipos sean opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Required hace que todos los tipos sean requeridos
type requiredExample = Required<Product>