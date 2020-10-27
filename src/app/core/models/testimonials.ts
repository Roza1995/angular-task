export class Testimonials {
    public id:number;
    public title: string;
    public imgUrl: string;
    public description: string;


    constructor(
        id:number,
        title:string,
        imgUrl: string,
        description: string,
        ){
            this.id = id;
            this.title = title;
            this.imgUrl = imgUrl;
            this.description = description;
    }
}