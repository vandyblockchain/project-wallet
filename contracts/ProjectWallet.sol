// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Allowance is Ownable{

    event AllowanceChanged(address _addressChanged, address _changedBy, uint _oldAmount, uint _newAmount);

     mapping (address => uint) public allowance;

    function setAllowance(address _who, uint _amount) public onlyOwner{
        emit AllowanceChanged(_who, msg.sender, allowance[_who], _amount);
        allowance[_who] = _amount;
    }

    modifier ownerOrAllowed(uint _amount){
        require(msg.sender == owner() || allowance[msg.sender] >= _amount, "Not Allowed");
        _;
    }

    function reduceAllowance(address _who, uint _amount) internal ownerOrAllowed(_amount){
        emit AllowanceChanged(_who, msg.sender, allowance[_who], allowance[_who] - _amount);
        allowance[_who] -= _amount;
    }
}

contract SimpleWallet is Allowance{
    event MoneySent(address _to, uint _amount);
    event MoneyDeposited(address _from, uint _amount);

    function withdraw(address payable _to, uint _amount) public ownerOrAllowed(_amount){
        if(msg.sender != owner()){
            reduceAllowance(msg.sender, _amount);
        }
        emit MoneySent(_to, _amount);
        _to.transfer(_amount);
    }

    function renounceOwnership() public view override onlyOwner{
        revert("Can't renounce ownership!");
    }

    function smartContractBal() public view returns(uint){
        return address(this).balance;
    }

    function deposit() public payable{
       
    }

    receive() external payable {}
    
}