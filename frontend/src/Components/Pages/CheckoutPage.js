/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { loadScript } from "@paypal/paypal-js";
import { getAuthenticatedUser } from "../../utils/auths";
import { getCartTotal, deleteCart } from "../../utils/shoppingCart";
import Navigate from "../Router/Navigate";
import OrderLibrary from "../../Domain/OrderLibrary";
import '../../stylesheets/_checkout.scss';
import Navbar from "../Navbar/Navbar";

const CheckoutPage = () => {
    const user = getAuthenticatedUser();
   
    if(user === undefined){
      Navigate('/login');
    }

    const html = `
    
      
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
            <div class="card card-registration card-registration-2" style="border-radius: 15px;">
              <div class="card-body p-0">
                <div class="row g-0">
                  <div class="col-lg-8">
                    <div class="p-5">
                      <h4 class="mb-3">Billing address</h4>
                      <form class="needs-validation" novalidate>
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" class="form-control inputValue" id="firstName" placeholder="" value="${user.firstname}" required>
                            <div class="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input type="text" class="form-control inputValue" id="lastName" placeholder="" value="${user.lastname}" required>
                            <div class="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="email">Email <span class="text-muted">(Optional)</span></label>
                          <input type="email" class="form-control inputValue" id="email" placeholder="" value="${user.email}">
                          <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                          </div>
                        </div>

                  

                        <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" class="form-control inputValue" id="address" value="${user.street}" required>
                        <div class="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                  
                      <div class="mb-3">
                        <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" value="">
                      </div>
                  
                      <div class="row">
                        <div class="col-md-5 mb-3">
                          <label for="country">Country</label>
                          <select class="custom-select d-block w-100" id="country" required>
                            <option value="">Choose...</option>
                            <option>Belgium</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Netherlands</option>
                            <option>Italy</option>
                            <option>Spain</option>
                          </select>
                          <div class="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>

                        <div class="col-md-3 mb-3">
                          <label for="zip">Zip</label>
                          <input type="text" class="form-control" id="zip" placeholder="" required>
                          <div class="invalid-feedback">
                            Zip code required.
                          </div>
                        </div>
                      </div>

                        <hr class="mb-4">
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="same-address">
                          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="save-info">
                          <label class="custom-control-label" for="save-info">Save this information for next time</label>
                        </div>
                        <hr class="mb-4">

                        <ul class="list-group mb-3">
                          <li class="list-group-item d-flex justify-content-between" id="totalPrice" value="${getCartTotal()}">
                            <span>Total (USD)</span>
                            <strong>${getCartTotal()} €</strong>
                          </li>
                        </ul>
                    </div>
                    </div>
                  <div class="col-lg-4 ">
                  <div class="p-5">
                          <h4 class="mb-3">Payment</h4>

                          <div class="d-block my-3">
                            <div class="custom-control custom-radio">
                              <input id="credit" name="paymentMethod" type="radio" class="custom-control-input"  checked required>
                              <label class="custom-control-label" for="credit">Credit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                              <input id="debit" name="paymentMethod" type="radio" class="custom-control-input"  required>
                              <label class="custom-control-label" for="debit">Debit card</label>
                            </div>
                            <div class="custom-control custom-radio">
                              <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input"   required>
                              <label class="custom-control-label" for="paypal">Paypal</label>
                            </div>
                          </div>

                          <div id="content1" class="payment-content">
                            
                            <div class="row">
                              <div class="col-md-6 mb-3">
                                <label for="cc-name">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                  Name on card is required
                                </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label for="cc-number">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                                <div class="invalid-feedback">
                                  Credit card number is required
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-3 mb-3">
                                <label for="cc-expiration">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                                <div class="invalid-feedback">
                                  Expiration date required
                                </div>
                              </div>
                              <div class="col-md-3 mb-3">
                                <label for="cc-expiration">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                                <div class="invalid-feedback">
                                  Security code required
                                </div>
                              </div>
                            </div>
                            <hr class="mb-4">
                        </div>
                    
                        <div id="content2" class="payment-content">
                          <div id="paypal-button-container" style="width: 200px"></div>
                        </div>

                          <div class="checkout-button">
                          <button type="button" id="btnCheckout" class="btn">Checkout</button>
                          </div>

                          <div class="checkout-modal">
                          <div class="modal fade" id="myModal" tabindex="-1" role="dialog"  aria-hidden="true">
                            <div class="modal-dialog" >
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Purchase successfully completed</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                  <p>Thank you <strong>${user.firstname} ${user.lastname}</strong> for your purchase</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                        </form>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="message">
        </div>
      </div>
   
    `;
    let active = '';
    const main = document.querySelector('main');
    main.innerHTML = html;
    changeValueInput();

    const script = document.createElement('script');
    // ajoute la source au script créé
    script.src = 'https://www.paypal.com/sdk/js?client-id=sd&currency=EUR&buyer-country=DE&commit=false';
    // Append au main (sinon il n'est pas executé)
    main.appendChild(script);

    const btnCredit = document.getElementById('credit');
    const btnDebit = document.getElementById('debit');
    const btnPaypal = document.getElementById('paypal');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    btnCredit.addEventListener('click' ,async (e) => {
      e.preventDefault();
      displayMethodPayment(content1);
    });

    btnDebit.addEventListener('click' ,async (e) => {
      e.preventDefault();
      displayMethodPayment(content1);
    });

    btnPaypal.addEventListener('click' ,async (e) => {
      e.preventDefault();
      if(!active){
      paypal();
    }
      displayMethodPayment(content2);
    });


    // eslint-disable-next-line no-undef
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
     
    const btnCheckout = document.getElementById('btnCheckout');
      
    btnCheckout.addEventListener('click', async (e) => {
      try {
        
        await OrderLibrary.prototype.createOrder();

        myModal.show();
    
        setTimeout(() => {
          myModal.hide();
          deleteCart();
          Navbar();
          Navigate('/');
        }, 3000);

      } catch (error) {
        console.error("Erreur lors de la création de la commande :", error);
        
      }
        
    });
    function displayMethodPayment(contentElement) {
      const allContentElements = document.querySelectorAll('.payment-content');
      allContentElements.forEach(element => {
        element.style.display = 'none';
      });
      contentElement.style.display = 'block';
      active = true;
    } 
}



function paypal() {
   loadScript({
      'client-id':
        'AcxVyDrUVK76TgOexqXYBhJQLc8AC7LIIsZYeI2xJim7Z2vFXGWRkN-4JzN4YeUXo3UjO14mx99K0Hvf',
    })
      .then((paypal) => {
        
  paypal.Buttons({
    createOrder (_data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '1.00'
          }
        }]
      });
    },
    onApprove (_data, actions) {
      return actions.order.capture().then((details) => {
        alert(`Transaction completed by ${  details.payer.name.given_name}`);
      });
    }
  }).render('#paypal-button-container');
})
}

function changeValueInput(){
  const inputValue = document.querySelectorAll('.inputValue');

  inputValue.forEach((input) => {
        input.addEventListener('input', function() {
          this.setAttribute('value', this.value);
        });
      });
}








export default CheckoutPage;