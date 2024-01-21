/* eslint-disable class-methods-use-this */
import { getAuthenticatedUser } from "../utils/auths";
import {getCartTotal} from "../utils/shoppingCart";
// import Navigate from "../Components/Router/Navigate";
import { renderPopUp } from "../utils/popUp";

class OrderLibrary{

   
     async createOrder(){

        const user = getAuthenticatedUser();
        const {id} = user;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const totalPrice =  getCartTotal();
                
        const date= new Date();

        
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();

        let payementMethod;

        const paypal = document.getElementById('paypal').checked;
        const credit = document.getElementById('credit').checked;
        const debit = document.getElementById('debit').checked;

        if(paypal === true){
          payementMethod = 'payal';
        }
        if(credit === true){
          payementMethod = 'credit';
        }
        if(debit === true) {
          payementMethod = 'debit';
        }

        if(firstName.trim() === '' || firstName === undefined|| lastName.trim() === '' || lastName === undefined ){
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">Please, complete all the fields!</div>`;
          renderPopUp();
          throw new Error();
        }
        
        let order;
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                  "buyerId" : id,
                  "firstName": firstName,
                  "lastName" : lastName,
                  "totalPrice" : totalPrice,
                  "payementMethod":payementMethod,
                  "day" : day,
                  "month" : month,
                  "year" : year,
                  
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              };
            console.log(" ORDERLIBRARY TEST2 ");

            
            const reponse = await fetch(`${process.env.API_BASE_URL}/order/addOrder`, options);
            console.log("résultat reponse " , reponse)
      
            if (!reponse.ok) {
              throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
            }
            
            order =  reponse.json();
          } catch (err) {
            const message = document.getElementById('message');
            message.innerHTML = `<div id="popUp">An error has occurred.Please try again</div>`;
            renderPopUp();
            console.error('error: ', err);
          }

          
          return order;
    
    }

    async getAllOrder(){
      let  allOrders;
      try {
          const reponse = await fetch(`${process.env.API_BASE_URL}/order/`);
          console.log("résultat reponse " , reponse)
    
          if (!reponse.ok) {
            throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
          }
          allOrders =  await reponse.json();
        } catch (err) {
          console.error('error: ', err);
        }
        return allOrders;
    }

    static async getOrdersFromUserId(id){
      let  orders='';
      const url =`${process.env.API_BASE_URL}/order/getOrdersOfUser/`
      try {
          const reponse = await fetch(url+id);
          console.log("résultat reponse " , reponse)
    
          if (!reponse.ok) {
            throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
          }
          orders =  await reponse.json();
        } catch (err) {
          console.error('error: ', err);
        }
        return orders;
  }



}
export default OrderLibrary;