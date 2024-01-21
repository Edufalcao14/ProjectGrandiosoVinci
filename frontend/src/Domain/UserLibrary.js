/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-unresolved
import Navbar from "../Components/Navbar/Navbar";
import Navigate from "../Components/Router/Navigate";
import {  setAuthenticatedUser, isStrongPassword  } from '../utils/auths';
import { renderPopUp } from "../utils/popUp";


const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
  }
  return age;
}



class UserLibrary{


  async emailAlreadyExist(email){
    let  user='';
    const url =`${process.env.API_BASE_URL}/auths/getUserByEmail`
    try {
        const reponse = await fetch(url+email);
        if (!reponse.ok) {
          return undefined;
        }
        user =  await reponse.json();
      } catch (err) {
        console.error('error: ', err);
        return undefined;
      }
    return user;
  }

    async onRegister(e) {

        e.preventDefault();
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const mail = document.getElementById('registerUsername').value;
        const registerPassword = document.getElementById('registerPassword').value;
        const registerConfPassword = document.getElementById('registerConfPassword').value;
        const birthdate = document.getElementById('birthdate').value;
        const countryName = document.getElementById('countryName').value;
        const zipCode = document.getElementById('zipCode').value;
        const cityName = document.getElementById('cityName').value;
        const streetName = document.getElementById('streetName').value;
        


        const age = calculateAge(birthdate);

        

        if (age < 6) {
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">You must be at least 6 years old to sign up.</div>`;
          renderPopUp();
          return;
        }
      
        if(registerPassword.trim() !== registerConfPassword.trim()) {
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">Passwords do not match!</div>`;
          renderPopUp();
          return;
        }

        if(firstname.trim() === ''  || lastname.trim() === '' || mail.trim() === '' || registerPassword.trim() === '' ||birthdate.trim() === '' || countryName.trim() === ''|| zipCode.trim() === '' || cityName.trim() === ''|| streetName.trim() === ''){
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">Please, complete all the fields!</div>`;
          renderPopUp();
          return;
        }
        const user = await UserLibrary.prototype.emailAlreadyExist(mail);
        
        
        if(user !== undefined){
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">This email already belongs to an account </div>`;
          renderPopUp();
          return;
        }
        
        if(!isStrongPassword(registerPassword.trim())) return;

          const options = {
          method: 'POST',
          body: JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": mail,
            "street" : streetName,
            "city" : cityName,
            "zipcode" : zipCode,
            "country" : countryName,
            "birthdate":birthdate,
            "password": registerPassword
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        
        const response = await fetch(`${process.env.API_BASE_URL}/auths/register`, options);
        
        const authenticatedUser = await response.json();
      
        try{
          if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      
          setAuthenticatedUser(authenticatedUser);
          Navbar();
          Navigate('/');
        }catch(error){
          alert(authenticatedUser);
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">An error has occurred.Please try again</div>`;
          renderPopUp();
          
          
        
        }
        
    }

  
    async onLogin(e) { 
        
        e.preventDefault();
      
        const mail = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if(mail.trim() === ' ' || password.trim() === ' '){
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">Please, complete all the fields!</div>`;
          renderPopUp();
          return;
        }

        const user = await UserLibrary.prototype.emailAlreadyExist(mail);
        
        if(user === undefined){
          const message = document.getElementById('message');
          message.innerHTML = `<div id="popUp">This email does not exist </div>`;
          renderPopUp();
          return;
        }
      
        const options = {
          method: 'POST',
          body: JSON.stringify({
            "email": mail,
            "password": password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
            
        try {
          const response = await fetch(`${process.env.API_BASE_URL}/auths/login`, options);
      
          if (!response.ok) {
            throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
          }
      
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const authenticatedUser = await response.json();
            setAuthenticatedUser(authenticatedUser);
            Navbar();     
            Navigate('/');
          } else {
            const message = document.getElementById('message');
            message.innerHTML = `<div id="popUp">An error has occurred.Please try again</div>`;
            renderPopUp();
          }
        } catch (error) {
        
          alert(error.message);
        }
    }



    static async getUserFromUsername(email){
      let  user='';
      const url =`${process.env.API_BASE_URL}/user?email=`
      try {
          const reponse = await fetch(url+email);
    
          if (!reponse.ok) {
            throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
          }
          user =  await reponse.json();
        } catch (err) {
          console.error('error: ', err);
        }
      return user;
    }

  
  static async getUserFromId(id){
    let  user='';
    const url =`${process.env.API_BASE_URL}/user/`
    try {
        const reponse = await fetch(url+id);
        
  
        if (!reponse.ok) {
          throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
        }
        user =  await reponse.json();
      } catch (err) {
        console.error('error: ', err);
      }
      return user;
}


 async onChangeInfo(id){

        const firstname = document.querySelector('#_firstname_').value;
        const lastname = document.querySelector('#_lastname_').value;
        const mail = document.querySelector('#_Username_').value;
        const registerPassword = document.querySelector('#_registerPassword_').value;
        const registerConfPassword = document.querySelector('#_registerConfPassword_').value;
        const countryName = document.querySelector('#_countryName_').value;
        const zipCode = document.querySelector('#_zipCode_').value;
        const cityName = document.querySelector('#_cityName_').value;
        const streetName = document.querySelector('#_streetName_').value;

        if(registerPassword !== registerConfPassword) {
          throw new Error(`The password is not the same`);
        }

        const options = {
          method: 'PATCH',
          body: JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": mail,
            "street" : streetName,
            "city" : cityName,
            "zipcode" : zipCode,
            "country" : countryName,
            "password": registerPassword
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
       
        const response = await fetch(`${process.env.API_BASE_URL}/user/onChange/${id}`, options);
        
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

  }

 

    
  

}
export default UserLibrary;