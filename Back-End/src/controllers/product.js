const { default: mongoose } = require('mongoose')
const Product=require('../models/product')
const slugify=require('slugify')



exports.createProduct=(req,res)=>{
    //res.status(200).json({file:req.file, body:req.body})
    const {name,description,category,createdBy,quantity,height,width,type,weight,gold,makingCharges,gst,total}=req.body
    let productPictures=[];

    if(req.files.length>0){
       productPictures= req.files.map(file=>{
            return {
                img:file.filename
            }
        });
    }
    
    const product=new Product({
        name:name,
        slug:slugify(name),
        height,
        width,
        type,
        gold,
        makingCharges,
        gst,
        weight,
        total,
        quantity,
        description,
        category,
        productPictures,
        createdBy:req.user._id,  
    });
    product.save((error,product)=>{
        if(error) return res.status(400).json({error});
        if (product){
            res.status(201).json({product})
        }
    })
    
      
};
