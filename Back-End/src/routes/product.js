const express=require('express');
//const {  } = require('../controllers/category');
const { requireSignIn, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controllers/product');
const router=express.Router();
const Product=require('../models/product')
const multer=require('multer')

const path=require('path');
const shortid=require('shortid');


/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })*/

  const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate()+'_'+file.originalname)
    }
  })



const upload=multer({storage});
router.post('/product/create', requireSignIn ,upload.array('productPicture'), adminMiddleware, createProduct)
//router.get('/category/getcategory',getCategories);

module.exports=router;