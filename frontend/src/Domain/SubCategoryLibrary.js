/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Navigate from "../Components/Router/Navigate";



class SubCategoryLibrary{
    
    static async getAllSubCategories(){
        let  allSubCategories='';
        try {
            const reponse = await fetch(`${process.env.API_BASE_URL}/subCategories/`);
            console.log("résultat reponse " , reponse)
      
            if (!reponse.ok) {
              throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
            }
            allSubCategories =  await reponse.json();
          } catch (err) {
            console.error('error: ', err);
          }
          return allSubCategories;
    }

    
}
export default SubCategoryLibrary;