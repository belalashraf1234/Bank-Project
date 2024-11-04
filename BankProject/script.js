'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, 
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const formatMovmentDays=(date)=>{
  const calcDays=(date1,date2)=>{
    return Math.abs((date1-date2)/(1000*60*60*24)) ;

  }
  const days=calcDays(new Date(),date)
  const day=`${date.getDate()}`.padStart(2,0);
  const month=`${date.getMonth()+1}`.padStart(2,0);
        const year=date.getFullYear();
    const hours=`${date.getHours()}`.padStart(2,0);
  const minutes=`${date.getMinutes()}`.padStart(2,0);
    const now=`${day}/${month}/${year}, ${hours}:${minutes}`;
}
const Movments=function(acc,sorted=false){
  let movments=acc.movements;
  console.log(movments);
  const movs=sorted?movments.slice().sort((a,b)=>a-b):movments;
  console.log(movs);
    containerMovements.innerHTML='';
    movs.forEach(function(mov,i){
      const date=new Date(acc.movementsDates[i]);
      const now=formatMovmentDays(date)
   
        const type=mov>0?'deposit':'withdrawal';
       
        const html=`
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__date">${now}</div>
        <div class="movements__value">${mov}€</div>
      </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin',html);
      
    
    })
}





const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const movementsUI=[200, 450, -400, 3000, -650, -130, 70, 1300];



const currenciesUI=new Map([[1,'USD'],[2,'EUR'],[3,'GBP']]);


/* const moventdesc=movements.map((value,key)=>
`movment ${key+1} ${value>0?"deposited":"withdrawn"} ${Math.abs(value)}`
)
console.log(moventdesc);
const user="Belal ashraf Elasyed";
const username=user.toLowerCase().split(' ');
const userdata=username.map((value,key)=>{
  return value[0].toUpperCase();
})
console.log(userdata.join('')); */
const createUsername=function(acc){
  acc.forEach((acc)=>{
    acc.username=acc. owner.toLowerCase().split(' ').map((value)=>value[0]).join('');
  })
}
createUsername(accounts);
console.log(accounts); 

const clacPrintBalance=(acc)=>{
  acc.balance=acc.movements.reduce((acc,cur)=>acc+cur,0);
  labelBalance.textContent=`${acc.balance}€`;
  

}



let calcDisplaySummary=(account)=>{

  const incomes=account.movements.filter(mov=>mov>0).reduce((acc,cur)=>acc+cur,0);
  labelSumIn.textContent=`${incomes}€`;
  console.log(incomes);
  const outcomes=account.movements.filter(mov=>mov<0).reduce((acc,cur)=>acc+cur,0);
  labelSumOut.textContent=`${Math.abs(outcomes)}€`;
  const interest=account.movements.filter(mov=>mov>0).map(deposit=>deposit*account.interestRate/100).reduce((acc,cur)=>{
    return acc+cur;
  },0);
  labelSumInterest.textContent=`${interest}€`;  
  
};
const updateUi=(currentAccount)=>{
  Movments(currentAccount);
  clacPrintBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}
let currentAccount;
btnLogin.addEventListener("click",function(e){
  e.preventDefault();
  currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)){
    labelWelcome.textContent=`wlecome back , ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity=1;
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
    updateUi(currentAccount);



  }
});
btnLoan.addEventListener("click",function(e){
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  if(amount>0&&currentAccount.movements.some(mov=>mov>=amount*0.1)){
   setTimeout(()=>{
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUi(currentAccount);
   },3000)
  }
  inputLoanAmount.value='';
});
btnTransfer.addEventListener("click",function(e){
  e.preventDefault();
  const amount =Number(inputTransferAmount.value);
  const receiveAcc=accounts.find(acc=>acc.username===inputTransferTo.value);
  console.log(receiveAcc,amount);
  inputTransferAmount.value=inputTransferTo.value='';
  if(amount>0&&
  receiveAcc&&
  receiveAcc.username!==currentAccount.username&&
  currentAccount.balance>=amount){
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiveAcc.movementsDates.push(new Date().toISOString());
    updateUi(currentAccount);


  }
});
btnClose.addEventListener("click",function(e){
  e.preventDefault();
  if(inputCloseUsername.value===currentAccount.username&&
  Number(inputClosePin.value)===currentAccount.pin){
    const index=accounts.findIndex(acc=>acc.username===currentAccount.username);
    accounts.splice(index,1);
    containerApp.style.opacity=0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted=false;
btnSort.addEventListener("click",function(e){
  e.preventDefault();
  Movments(currentAccount,!sorted);
  sorted=!sorted;
});
let date=new Date();
const day=`${date.getDate()}`.padStart(2,0);
const month=`${date.getMonth()+1}`.padStart(2,0);
const year=date.getFullYear();
const hours=`${date.getHours()}`.padStart(2,0);
const minutes=`${date.getMinutes()}`.padStart(2,0);
const now=`${day}/${month}/${year}, ${hours}:${minutes}`;
labelDate.textContent=now;

let data=new Date(2019,10,18);
let data2=new Date(2019,10,14)
console.log(new Date(3000)); 
const setlogout=()=>{
 let time =5;
 let timer= setInterval((data)=>{
  console.log(data,time);
  time--;
  if(time<0){
    clearInterval(timer)
  }
 },1000,"hello")


}
setlogout();
