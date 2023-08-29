const mongoose =require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    height:{type:String,

        },

    width:{type:String,

        required:true},

    type:{type:String,

          required:true},

    weight:{type:String,

        required:true},
        
    gold:{type:String,
            required:true},

    makingCharges:{type:String,
            required:true},
    quantity:{
        type:Number,
        required:true
    },
    gst:{type:String,
        required:true},
    
    total:{
        type:String,
        required:true
    },
        offer:{type:Number},

        productPictures:[
            {img:{type:String}}
        ],
        reviews:[

            {
                userId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
                review:String
            }
        ],
        category:{type:mongoose.Schema.Types.ObjectId, ref:"Category"},

        createdBy:{type:mongoose.Schema.Types.ObjectId, ref:"User"},

        updatedAt:Date,
},{timestamps:true});

module.exports=mongoose.model('Product', productSchema);