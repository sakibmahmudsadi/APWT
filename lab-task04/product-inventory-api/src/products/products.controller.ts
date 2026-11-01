import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto.js';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService:ProductsService){}

    @Post()
    create(@Body() body:CreateProductDto){
        return this.productsService.create(body);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get('search')
    search(@Query('keyword') keyword:string){
        return this.productsService.search(keyword); 
    }

    @Get('category/:cat')
    findByCategory(@Param() category:string){
        return this.productsService.findByCategory(category);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.productsService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id:number, @Body() body:PartialUpdateProductDto){
        return this.productsService.update(id,body);
    }

    @Put(':id')
    async replace(@Param('id', ParseIntPipe) id:number, @Body() body:CreateProductDto){
        return this.productsService.replace(id,body);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id:number){
        return this.productsService.remove(id);
    }

    @Patch(':id/toggle')
    async toggleActivate(@Param('id', ParseIntPipe) id:number){
        return this.productsService.toggleActive(id); 
    }

}
