import {componentDefaultDataMap} from "./component-defaultdata"


const getComponentDefaultData= (comKey: string)=>{
    Object.keys(componentDefaultDataMap).forEach((key)=>{
        if(comKey== key){
            return componentDefaultDataMap[comKey];
        }
    })
    throw new Error('cant find component default data!')
}

export { getComponentDefaultData}