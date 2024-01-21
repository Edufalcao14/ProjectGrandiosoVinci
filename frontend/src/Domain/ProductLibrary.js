/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

class ProductLibrary{
    
    static async getAllProducts(props){
        let  allProducts='';
        const url =`${process.env.API_BASE_URL}/product?`;
        try {
            const reponse = await fetch(url+props);
            console.log("résultat reponse " , reponse)
      
            if (!reponse.ok) {
              throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
            }
            allProducts =  await reponse.json();
          } catch (err) {
            console.error('error: ', err);
          }
          return allProducts;
    }

    async getProductById(id){
      let  product='';
        const url = `${process.env.API_BASE_URL}/product/getProduct/`
        try {
            const reponse = await fetch(url+id);
            console.log("résultat reponse " , reponse)
      
            if (!reponse.ok) {
              throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
            }
            product =  await reponse.json();
          } catch (err) {
            console.error('error: ', err);
          }
          return product;
    }

     async renderAllProductsByCategory(param){
      let productByCatgeries ='';
      const url = `${process.env.API_BASE_URL}/product?category=${param}`
        try{
          const response = await fetch(url)

          if (!response.ok) {
            throw new Error(`fetch error : ${response.status}${response.statusText}`);
          }
          productByCatgeries = response.json();
        }catch (err) {
          console.error('error: ', err);
        }
        return productByCatgeries;
    }
}
export default ProductLibrary;
