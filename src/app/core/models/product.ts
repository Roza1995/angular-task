export class Product {
    public id:number;
    public imgUrl: string;
    public title:string;
    public price: number;
    public description: string;
      

    constructor(
        id:number,
        imgUrl: string,
        title:string,
        price: number,
        description: string,
        ){
            this.id = id;
            this.imgUrl = imgUrl;
            this.title = title;
            this.price = price;
            this.description = description;
    }
}