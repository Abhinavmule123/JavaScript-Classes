const inventoryObject = ()=>{
    const inventory =[];

    const add = (item)=>{
        if(!(inventory.includes(item)))
            inventory.push(item);
    }

    const remove = (item)=>{
        if(inventory.indexOf(item) != -1){
            const c_index = inventory.indexOf(item);
            inventory.splice(c_index,1);
        }
    }

    const show = ()=>{
        inventory.forEach((currentItem)=>{
            console.log(currentItem);
        });
    }
    return {
        add :add,
        remove : remove,
        show :show
    };
}



function main(commands){
    const inventory = inventoryObject();
    commands.forEach((currentParameter)=>{   // add table
           const splitCommand =  currentParameter.split(" ");
           const currentCommand  = splitCommand[0];
           const item =  splitCommand[1];
           if(currentCommand == "add"){
                inventory.add(item);
           }else if(currentCommand == "remove"){
                inventory.remove(item);
           }else if(currentCommand == "show"){
                inventory.show();
           }
    });
}
            
main(["add table 10","add chair 30","add sofa 20","remove chair","allshow","show table"]); 