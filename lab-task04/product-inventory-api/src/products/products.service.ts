import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {

    constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>){}

    async create(dto:CreateProductDto){
        const product = this.productsRepo.create(dto);
        const saveData = await this.productsRepo.save(product); 
        return {message:"Created",
            data: saveData,
        };
    }

    async findAll(){
        const products = await this.productsRepo.find({
            order: { createdAt:'DESC'}
        })

        return {
        message: 'Products retrieved successfully',
        count: products.length,
        data: products,
    };
    }

    async findOne(id:number){
        const product = await this.productsRepo.findOne({
            where: {id}
        });

        if(!product){
            throw new NotFoundException(`Product with id ${id} not found!`)
        }

        return {
            message: 'Product retrieved successfully',
            data: product,
        };
    }

    async update(id:number, dto:PartialUpdateProductDto){
        const product = await this.productsRepo.findOne({
            where: { id },
        });

        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }

        Object.assign(product,dto);
        const updatedProduct = await this.productsRepo.save(product);

        return {
            message: 'Product updated successfully',
            data: updatedProduct,
        };
    }

    async replace(id: number, dto: UpdateProductDto) {
        const product = await this.productsRepo.findOne({
            where: { id },
        });

        if (!product) {
          throw new NotFoundException(`Product with id ${id} not found`);
        }

        Object.assign(product, dto);
        const replacedProduct = await this.productsRepo.save(product);

        return {
          message: 'Product replaced successfully',
          data: replacedProduct,
        };
    }

    async remove(id:number){
        const product = await this.productsRepo.findOne({
            where: { id },
        });

        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }

        await this.productsRepo.delete(id);

        return {
            message: 'Product deleted successfully',
            id,
        };
    }

    async findByCategory(category:string){
        const products = await this.productsRepo.find({
            where:{
                category: ILike(category)
            }
        })

        return{
            message: "Products received by category!",
            count: products.length,
            data: products,
        }
    }

    async search(keyword:string){
        const products = await this.productsRepo.find({
            where:{
                name: ILike(`%${keyword}%`)
            }
        })

        return{
            message: "Products received by category!",
            count: products.length,
            data: products,
        }
    }

    async toggleActive(id:number){
        const product = await this.productsRepo.findOne({
            where: { id },
        });

        if (!product) {
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        
        product.isActive=!product.isActive;
        const saveData = await this.productsRepo.save(product); 
        return {message:"Toggled Successfully",
            data: saveData,
        };
    }
}
