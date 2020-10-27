export class Product {
    public id: number;
    public name: string;
    public price: number;
    public imgUrl: string;
    public images: string;
    public description: string;
      

    constructor(
        id: number,
        name: string,
        price: number,
        imgUrl: string,
        images: string,
        description: string,
        ){
            this.id = id;
            this.name = name;
            this.price = price;
            this.imgUrl = imgUrl;
            this.images = images;
            this.description = description;
    }
}