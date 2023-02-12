// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Funder {
    struct Mission{

        address owner;
        address[] heros;

        uint256[] eths;
        uint256 ethGiven;
        uint256 ethTarget;
        uint256 missionDays;

        string name;
        string desc;
        string img;

    }

    uint256 public missionInt = 0;
    mapping (uint256 => Mission) public missions;

    function donate(uint256 id) public payable {
        
        uint256 ETH = msg.value;

        Mission storage mission = missions[id];
        mission.heros.push(msg.sender);
        mission.eths.push(ETH);
        (bool sent,) = payable(mission.owner).call{value: ETH}("");

        if(sent) {
            mission.ethGiven = mission.ethGiven + ETH;
        }
    }

    function addMission(address owner, string memory name, string memory desc, uint256 ethTarget, uint256 missionDays, string memory img) public returns (uint256) {

        Mission storage mission = missions[missionInt];

        require (mission.missionDays < block.timestamp, 'Missed the deadline');

        mission.owner = owner;
        mission.name = name;
        mission.desc = desc;
        mission.ethTarget = ethTarget;
        mission.missionDays = missionDays;
        mission.ethGiven = 0;
        mission.img = img;

        missionInt++;

        return missionInt - 1;
    }

    function getAllMissions() public view returns (Mission[] memory){
        Mission[] memory all = new Mission[](missionInt);

        for(uint i = 0; i < missionInt; i++) {
            Mission storage temp = missions[i];
            all[i] = temp;
        }
        return all;
    }

    function getHeros(uint256 id) view public returns (address[] memory, uint256[] memory) {
        return (missions[id].heros, missions[id].eths);
    }
}