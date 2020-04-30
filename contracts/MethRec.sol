pragma solidity ^0.5.16;
contract MethRec{
    struct User {
        uint id;
        string name;
        string data;
        string allergies;
        string date;
        uint pass;

    }

    User[] public users;


    function create_account(uint id,string memory name,uint pass) public {
       string memory data="";
       string memory allergies="";
       string memory date="";
       users.push(User(id,name,data,allergies,date,pass));

   }

    function read(uint id,uint pass) view public returns(uint,string memory,string memory data,string memory allergies,string memory date){
       uint i=find(id);
       if(users[i].pass==pass){
       return(users[i].id,users[i].name,users[i].data,users[i].allergies,users[i].date);
       }
       else{
       revert("Incorrect password");
       }

    }

    function add_data(uint id,string memory data,string memory allergies,string memory date,uint pass) public {

      uint i=find(id);
      data=concat("  +",data);
      date=concat("  +",date);
      if(users[i].pass==pass){
      users[i].data=concat(users[i].data,data);
      users[i].allergies=allergies;
      users[i].date=concat(users[i].date,date);
      }
      else{
      revert("Incorrect password");
      }


    }


    function destroy(uint id,uint pass) public{
        uint i=find(id);
         if(users[i].pass==pass){
        delete users[i];
         }
         else{
         revert("Incorrect password");
         }
    }

    function find(uint id) view internal returns(uint){
         for (uint i=0;i<users.length;i++){
            if(users[i].id==id){
                return i;
            }
        }
        revert('User does not exist');
    }

 function concat(string memory a, string memory b) internal pure returns (string memory) {

    return string(abi.encodePacked(a, b));

}


}
