import '../../stylesheets/_changePersonalInfoPage.scss';
import UserLibrary from '../../Domain/UserLibrary';
import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const changePersonalInfoPage = async () => {
  clearPage();
  renderRegisterForm();
};

async function renderRegisterForm() {
  const url = window.location.search;
  const id = url.split('=');
  console.log('id : ', id[1]);
  /*
  const userEmail = getAuthenticatedUser();
  const url = `email=${userEmail.email}`
  */

  const user = await getUserFromid(id[1]);

  async function getUserFromid(url_) {
    console.log(url_);
    const userFound = await UserLibrary.getUserFromId(url_);
    return userFound;
  }

  const main = document.querySelector('main');
  const form = document.createElement('form');
  main.appendChild(form);
  form.innerHTML = `

  <section class="background2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="backgroundForm2" style="border-radius: 15px; padding: 20px;">

          <h2 class="titleChangeInfo"> Change Your Account Information </h2>

          <div class="col-md-6">
            <div class="form-group last mb-3">
              <input type="text" id="_firstname_" class="form-control" placeholder="${user.firstname}" required=true autocomplete="off"/>
              <label class="form-label" for="firstname"></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group last mb-3">
              <input type="text" id="_lastname_" class="form-control" placeholder="${user.lastname}" required=true autocomplete="off"/>
              <label class="form-label" for="lastname"></label>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group last mb-3">
                <input type="text" id="_Username_" class="form-control" placeholder="${user.email}" required=true autocomplete="off"/>
                <label class="form-label" for="Username"></label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group last mb-2">
                <input type="text" class="form-control" placeholder="${user.street}" id="_streetName_" required=true autocomplete="off"/>
                <label class="form-label" for="Street"></label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group last mb-2">
                <input type="text" class="form-control" placeholder="${user.city}" id="_cityName_" required=true autocomplete="off"/>
                <label class="form-label" for="City"></label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group last mb-2">
                <input type="text" class="form-control" placeholder="${user.zipcode}" id="_zipCode_" required=true autocomplete="off"/>
                <label class="form-label" for="Zipcode"></label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group last mb-2">
                <input type="text" class="form-control" placeholder="${user.country}" id="_countryName_" required=true autocomplete="off"/>
                <label class="form-label" for="Country"></label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group last mb-3">
                <input type="password" class="form-control" placeholder="**********" id="_registerPassword_" required=true autocomplete="off"/>
                <label class="form-label" for="Password"></label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group last mb-3">
                <input type="password" class="form-control" placeholder="**********" id="_registerConfPassword_" required=true autocomplete="off"/>
                <label class="form-label" for="registerConfPassword"></label>
              </div>
            </div>
          </div>

          <div class="control__indicator"></div>
          <div class="d-flex mb-5 mt-4 align-items-center">
            <input type="submit" id="BtnChange" class="btn btn-outline-light btn-lg px-5" style="font:1em CenturyGothic" value="Confirm Change" />
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

    `;
  
  const btnChange = document.querySelector('#BtnChange');
  btnChange.addEventListener('click',  (e) => {
    console.log(`test de redirection  email:${user.email}`)
    if (!validateForm()) {
      e.preventDefault();
    } else {
      const email = document.querySelector('#_Username_').value;
      UserLibrary.prototype.onChangeInfo(user.id);
      const urlnavigate = `/user?email=${email}`
     e.preventDefault();
    Navigate(urlnavigate);
    }
  });
}

function validateForm() {
  const requiredInputs = document.querySelectorAll('[required=true]');

  // eslint-disable-next-line no-restricted-syntax
  for (const input of requiredInputs) {
    if (!input.value.trim()) {
      alert('Please fill out all required fields.');
      return false;
    }
  }

  return true;
}

export default changePersonalInfoPage;
