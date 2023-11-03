import Product from "../model/products.js"


//creted product
const cretedProduct=async(data)=>{
 return Product.create(data);
}

//all products
const getedProduct=async()=>{
  return Product.find();
}

//updated product
const updatedProduct=async(id,data)=>{
        return Product.findByIdAndUpdate(id, data, {
        new:true, useFindAndModify:true,runValidators: true
    })
}

//deleted product
const deletedProduct= async(id)=>{  
   return Product.findByIdAndRemove(id);
}


export{cretedProduct,getedProduct, updatedProduct,deletedProduct }

