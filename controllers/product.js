
import {cretedProduct,getedProduct, updatedProduct,deletedProduct} from "../services/products.js"

const creteProduct=async(req,res)=>{
    try {
        const product= await cretedProduct(req.body);
        res.status(201).json({
            success:true,
            product
        })
    } catch (error) {
        console.log("error coming", error.message);
        res.status(500).json({
            message: error.message
        })
    }
}


const getProduct=async(req,res)=>{
    try {
        const products= await getedProduct();

        res.status(200).json({
            success:true,
            products
        })
    } catch (error) {
        console.log("error coming", error.message);
        res.status(500).json({
            message: error.message
        })
    }
}


const updateProduct=async(req,res)=>{
    try {
        let product = await updatedProduct(req.params.id, req.body)
        if(!product){
            return res.status(500).json({
                success: false,
                message: "product not found"
            })
        }
        
        res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        console.log("error coming", error.message);
        res.status(500).json({
            message: error.message
        })
    }

}


const deleteProduct= async(req,res)=>{
   try {
    const product = await deletedProduct(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }

    res.status(200).json({
        success:true,
        message: 'product is deleted'
    })
    
   } catch (error) {
    console.log("error coming", error.message);
    res.status(500).json({
        message: error.message
    })
   }

}


export{creteProduct,getProduct, updateProduct,deleteProduct }

