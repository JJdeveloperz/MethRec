var abi =[
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "data",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "allergies",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "pass",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "pass",
        "type": "uint256"
      }
    ],
    "name": "create_account",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pass",
        "type": "uint256"
      }
    ],
    "name": "read",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "data",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "allergies",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "data",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "allergies",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "pass",
        "type": "uint256"
      }
    ],
    "name": "add_data",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pass",
        "type": "uint256"
      }
    ],
    "name": "destroy",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
var contractaddress = '0x43b24b3e5463BC17Ff838e1c635673dDdce7F2F2';
var myAbi = web3.eth.contract(abi);
var myfunction = myAbi.at(contractaddress);




window.onload = function () {if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      window.ethereum.enable();
      // Acccounts now exposed
      return web3;
    } catch (error) {
      console.error(error);
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use Mist/MetaMask's provider.
    const web3 = window.web3;
    console.log('Injected web3 detected.');
    return web3;
  }
  // Fallback to localhost; use dev console port by default...
  else {
    const provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
    const web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
    return web3;
  }
 

readvalue();
}
//
//
function readvalue() {
myfunction.read(document.getElementById("read_id").value,document.getElementById("read_password").value,function (err, xname) {
if (err) { console.log(err) }
if (xname) {

  var table=document.getElementById("mytable");


  var data=xname[2].split("+");
  var date=xname[4].split("+");
  var i=data.length-1;
  while(i>0)
  {
    var row=table.insertRow(-1);
    var cell0=row.insertCell(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);
    var cell4=row.insertCell(4);

  cell0.innerHTML=xname[0];
  cell1.innerHTML=xname[1];
  cell2.innerHTML=date[i];
  cell3.innerHTML=data[i];
  cell4.innerHTML=xname[3];

  i=i-1;


}

}
});
}




function addvalues(){
  myfunction.add_data(document.getElementById("add_id").value,document.getElementById("add_data").value,document.getElementById("add_allergies").value,document.getElementById("add_date").value,document.getElementById("add_password").value, {from:web3.eth.accounts[0]},function(error,result){
    if (!error) {
    console.log(result);
    } else {
    console.log(error);
    }
  })
}



function delvalue(){
  myfunction.destroy(document.getElementById("delete_id").value,document.getElementById("delete_password").value, {from:web3.eth.accounts[0]},function(error,result){
    if (!error) {
    console.log(result);
    } else {
    console.log(error);
    }
  })
}






function setvalue() {

if(document.getElementById("create_password").value==document.getElementById("create_confirm_password").value){


myfunction.create_account(document.getElementById("create_id").value,document.getElementById("create_name").value,document.getElementById("create_password").value, { from: web3.eth.accounts[0] }, function (error, result) {
if (!error) {
console.log(result);
} else {
console.log(error);
}
})
}


}
