class Ghost{
constructor(name,type){
    this.name = name
    this.type = type
}
}
//class for house, house name, empty array
//my house will class will hold hold array of ghosts
class House{
constructor(name){
    this.name = name
    this.ghostArray =[]
}
}
//menu class array to store houses
class Menu{
constructor(){
    this.houseArray = []
    this.selectedHouse = null
}
//method to start app (switch statement for below)
start(){
    let selection = this.spookyMenu()
    while (selection != 0){
        switch(selection){
            case '1':
                this.createHouse();
                break;
            case'2':
                this.viewHouse();
                break;
            case '3':
                this.deleteHouse();
                break;
            case '4':
                this.displayHouse()
                break;
            default:
                selection = 0;
        }
        selection = this.spookyMenu()
    }
    alert('Stay Spooky!')
}
spookyMenu(){
    return prompt(`
    0) Exit the Haunted Houses
    1) Create a New Haunted House
    2) View Haunted House
    3) Delete Haunted House
    4) Show all Haunted Houses
    `)
}
spookyHouseMenu(houseInfo){
    return prompt(`
    0) Back
    1) Create your ghost or ghoul
    2) Delete you ghost or ghoul
    -------------------------------
    ${houseInfo}
    `)
}
//need a method to create house
createHouse(){
    let name = prompt('Enter a name to create your spooky haunted house: ')
    this.houseArray.push(new House(name))
    }
//display all houses
displayHouse(){
    let houseString = ''
    for(let i = 0; i < this.houseArray.length; i++){
        houseString += i + ') ' + this.houseArray[i].name + '\n'
        }
     alert(houseString)
    }
//need method to view house + add and delete ghosts
viewHouse(){
    let index = prompt('Enter the index of the haunted house you wish to see: ')
    if(index > -1 && index < this.houseArray.length){
        this.selectedHouse = this.houseArray[index]
        let description = 'Haunted House Name: ' + this.selectedHouse.name +'\n';
        for (let i = 0; i < this.selectedHouse.ghostArray.length; i++){
            description += i +') ' + this.selectedHouse.ghostArray[i].name
            + '- ' + this.selectedHouse.ghostArray[i].type + '\n'
    }
let selection = this.spookyHouseMenu(description)
    switch(selection){
        case '1':
            this.createGhost()
            break;
        case '2':
            this.deleteGhost()
    }
}
}
//need method to delete house
deleteHouse(){
    let index = prompt ('Enter the index of the house you wish to delete: ')
    if(index > -1 && index < this.houseArray.length){
        this.houseArray.splice(index,1)
    }
}
createGhost(){
    let name = prompt ('Enter name of new ghost or ghoul: ')
    let type = prompt ('Enter name if you what a ghost, ghoul or goblin: ')
    this.selectedHouse.ghostArray.push(new Ghost(name, type))
}
deleteGhost(){
    let index = prompt('Enter the index of ghost, ghoul, or goblin you wish to delete: ')
    if (index > -1 && index <this.selectedHouse.ghostArray.length){
        this.selectedHouse.splice(index,1)
    }
}
}
let menu = new Menu()
menu.start()