// import { getCartTotal } from "../../utils/shoppingCart";
// eslint-disable-next-line import/no-extraneous-dependencies
import {Chart} from 'chart.js/auto';
import OrderLibrary from '../../Domain/OrderLibrary';
import '../../stylesheets/_admin.scss';
import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import Navigate from '../Router/Navigate';

const AdminPage = async () => {

    if(isAuthenticated()){
        const user = getAuthenticatedUser();
        if(user.firstname === "admin"){

            let html = ``;
            const main = document.querySelector('main');
            main.innerHTML = html;
            const orders = await OrderLibrary.prototype.getAllOrder(); 
            const annualTotalPrice = await getAnnualTotalPriceOrder(orders);
            const date= new Date();
            const month = date.getMonth() + 1; 
            const monthlyTotalPrice = await getMonthlyTotalPriceOrder(orders,month)

            html += `
            <div id="content-wrapper" class="d-flex flex-column">
                <div class="container-fluid">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>

                    
                    <div class="row">

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Earnings (Monthly)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">${monthlyTotalPrice.toLocaleString( { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Earnings (Annual)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">${annualTotalPrice.toLocaleString( { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-4 font-weight-bold text-gray-800"> 50%</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar" style="width: 50%"
                                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                        <div class="row ">
                        <div class="col-xl-8 col-lg-7">
                            <div class="card shadow mb-10">
                                    <div class="col-lg-4 d-flex align-items-stretch">
                                        <div class="card border-white w-110">
                                            <div class="card-body p-4">
                                                <div class="mb-7 mb-sm-2">
                                                    <h5 class="card-title fw-semibold">Sales Overview</h5>
                                                </div>
                                                <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                                                    <div><canvas id="myChart" height="400" width="900"></canvas></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-8">
                            <div class="card shadow mb-9">
                                <div class="col-lg d-flex align-items-stretch">
                                    <div class="card border-white w-100">
                                        <div class="card-body p-4">
                                            <h5 class="card-title fw-semibold mb-4">Recent Transactions</h5>
                                            <div class="table-responsive">
                                                <table class="table text-nowrap mb-0 align-middle">
                                                    <thead class="text-dark fs-4">
                                                        <tr>
                                                            <th class="border-bottom-0">
                                                                <h6 class="fw-semibold mb-0">Id</h6>
                                                            </th>
                                                            <th class="border-bottom-0">
                                                                <h6 class="fw-semibold mb-0">Assigned</h6>
                                                            </th>
                                                            <th class="border-bottom-0">
                                                                <h6 class="fw-semibold mb-0">Name</h6>
                                                            </th>
                                                            <th class="border-bottom-0">
                                                                <h6 class="fw-semibold mb-0">Priority</h6>
                                                            </th>
                                                            <th class="border-bottom-0">
                                                                <h6 class="fw-semibold mb-0">Budget</h6>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="recentTransactions">

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            `;

            
            main.innerHTML += html;
            const recentTransactions = document.getElementById('recentTransactions');

                let html2;
                let i = 0;
                
                
            while(i < orders.length){
                const idOrder = orders[i].id;
                const firstNameOrder = orders[i].firstName;
                const lastNameOrder = orders[i].lastName;
                const payementMethodOrder = orders[i].payementMethod;
                const price = orders[i].totalPrice;
            

                html2 = `
                    <tr>
                    <td class="border-bottom-0"><h6 class="fw-semibold mb-0">${idOrder}</h6></td>
                    <td class="border-bottom-0">
                        <h6 class="fw-semibold mb-1">${lastNameOrder}</h6>
                        <span class="fw-normal">${firstNameOrder}</span>                          
                    </td>
                    <td class="border-bottom-0">
                        <p class="mb-0 fw-normal">${payementMethodOrder}</p>
                    </td>
                    <td class="border-bottom-0">
                        <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">Low</span>
                        </div>
                    </td>
                    <td class="border-bottom-0">
                        <h6 >${price.toLocaleString({ minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</h6>
                    </td>
                </tr>
                    
                `;

            i += 1;
            recentTransactions.innerHTML += html2;

            };

            

                (async function() {

                const data = [
                    { year: 2010, count: await countOrdersByYear(2010,orders) },
                    { year: 2011, count: await countOrdersByYear(2011,orders) },
                    { year: 2012, count: await countOrdersByYear(2012,orders) },
                    { year: 2013, count: await countOrdersByYear(2013,orders) },
                    { year: 2014, count: await countOrdersByYear(2014,orders) },
                    { year: 2015, count: await countOrdersByYear(2015,orders) },
                    { year: 2016, count: await countOrdersByYear(2016,orders) },
                ];
                console.log(data)
                // eslint-disable-next-line no-new
                new Chart(
                    document.getElementById('myChart'),
                    {
                    type: 'bar',
                    data: {
                        labels: data.map(row => row.year),
                        datasets: [
                        {
                            label: 'Acquisitions by year',
                            data: data.map(row => row.count)
                        }
                        ]
                    }
                    }
                );
                })();


        }
        else{
            Navigate('/');
        }

    }
    else{
        Navigate('/');
    }
}


  async function getAnnualTotalPriceOrder(orders){
   
    let sumAnnualPrice = 0;

    orders.forEach((item) => {

      if( item.totalPrice !== undefined){
        sumAnnualPrice += item.totalPrice;
      }

    });
   
    return sumAnnualPrice;
    
  }

  async function getMonthlyTotalPriceOrder(orders, month){
   
    let sumMonthlyPrice = 0;

    orders.forEach((item) => {

      if( item.totalPrice !== undefined){
        if(item.month === month){
            sumMonthlyPrice += item.totalPrice;
        }
        
      }

    });
   
    return sumMonthlyPrice;
    
  }

  async function countOrdersByYear(year, orders){

    let count = 0;

    orders.forEach((item) => {

     if(item.year === year){
        count += 1;
     }  

    });
   
    return count;
  }

  

  
  export default AdminPage;