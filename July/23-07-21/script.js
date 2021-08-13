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
           const count = splitCommand[2];
           if(currentCommand == "add"){
                inventory.add(item,count);
           }else if(currentCommand == "remove"){
                inventory.remove(item);
           }else if(currentCommand == "show"){
                inventory.show();
           }
    });
}
            
<<<<<<< HEAD:23-07-21/script.js
main(["add table 10","add chair 30","add sofa 20","remove chair","allshow","show table"]); 
=======
main(["add table","add chair","add sofa","remove chair","show"]);
>>>>>>> 2b1ed59e317be79cc060aa2346b2b2ef07ee40e7:July/23-07-21/script.js
