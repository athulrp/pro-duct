// structure a particular product with datatype

export class ProductModel{
    // public _id ?: String;


    constructor(



        
        public productId : String,
        public productName : String,
        public productCode : String,
        public releaseDate : String,
        public description : String,
        public price : Number,
        public starRating : Number,
        public imageUrl : String
    ) {}
}