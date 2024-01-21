/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { getRememberMe, setRememberMe } from '../../utils/auths';
import { clearPage, renderPageTitle } from '../../utils/render';
import UserLibrary from '../../Domain/UserLibrary';
import fond from '../../img/login-register/fond.png';
import degrade from '../../img/login-register/degrade.png';
import '../../stylesheets/_register.scss';

const RegisterPage = () => {
  clearPage();
  renderPageTitle();
  renderRegisterForm();

};

function renderRegisterForm() {
  /*  student form  */
  const main = document.querySelector('main');
  const container = document.createElement('container');
  const maDiv = document.createElement('div');
  maDiv.className='row justify-content-around';
  maDiv.id = 'maDiv'
  maDiv.style.backgroundImage = `url(${degrade})`;
  const maDiv2 = document.createElement('div');
  maDiv2.className= 'col-5';
  const form = document.createElement('form');
  form.className='registerForm'
  const rememberme = document.createElement('input');
  const remembered = getRememberMe();
  rememberme.checked = remembered;
  rememberme.addEventListener('click', onCheckboxClicked);
  maDiv2.appendChild(form);
  maDiv.appendChild(maDiv2);
  container.appendChild(maDiv);
  main.appendChild(container); 

  form.innerHTML=
  ` 
  <div class="container-fluid py-3 h-100" id="register-container">
  <div class="row d-flex align-items-center h-100">
    <div class="col-12 ">
      <div id="background-sign-up" class="card bg-transparent text-white" style="border-radius: 1rem; background: url(${fond}); background-size: cover" >
        <div class="card-body px-5 py-2 text-center">
          <div class="mb-md-5 mt-md-4 pb-1">
            <h2 >SIGN UP</h2>
            </br>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group last mb-3">
                  <input  type="text" id="firstname" class="form-control" placeholder="Firstname"  />
                  <label class="form-label" for="firstname"></label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group last mb-3">
                  <input type="text" id="lastname" class="form-control" placeholder="Lastname" />
                  <label class="form-label" for="lastname"></label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group last mb-3">
                  <input type="email" id="registerUsername" class="form-control" placeholder="Email"  />
                  <label class="form-label" for="registerUsername"></label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group last mb-2">
                  <input type="text" class="form-control" placeholder="Street" id="streetName"  />
                  <label class="form-label" for="Street"></label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group last mb-2">
                  <input type="text" class="form-control" placeholder="City" id="cityName" />
                  <label class="form-label" for="City"></label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group last mb-2">
                  <input type="text" class="form-control" placeholder="Zip code" id="zipCode"/>
                  <label class="form-label" for="Zipcode"></label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group last mb-2">
                  <input type="text" class="form-control" placeholder="Country" id="countryName"  />
                  <label class="form-label" for="Country"></label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="form-group last mb-3">
                  <input type="date" id="birthdate" class="form-control" placeholder="birthdate"/>
                  <label class="form-label" for="birthdate"></label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group last mb-3">
                  <input type="password" class="form-control" placeholder="Password" id="registerPassword"  />
                  <label class="form-label" for="Password"></label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group last mb-3">
                  <input type="password" class="form-control" placeholder="Confirm password" id="registerConfPassword"  />
                  <label class="form-label" for="registerConfPassword"></label>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex mb-5 mt-4 align-items-center">
            <div class="d-flex align-items-center">
              <div class="mb-3 form-check">
                <input type="checkbox" id="rememberme" class="form-check-input" checked="${getRememberMe()}" />
                <label class="form-check-label" for="rememberme" style="font:1em CenturyGothic">Remember me</label>
              </div>
              <div class="control__indicator"></div>
            </div>
          </div>

          <input type="submit" class="btn btn-outline-light btn-lg px-5" style="font:1em CenturyGothic" value="SIGN UP" />
        </div>
      </div>
    </div>
    </div>
    <div id="message">
    </div>
  </div>
</div>


  
`
  form.addEventListener('submit', UserLibrary.prototype.onRegister);
 
}

// eslint-disable-next-line no-unused-vars
function onCheckboxClicked(e) {
  setRememberMe(e.target.checked);
}



export default RegisterPage;
