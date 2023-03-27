const db = require('./dummyDatabase')
const sendMailer = require('./mailer')

// data example: {"Station ID": 1068, "RFID ID": "B1 B2 B3", "Scale Weight": 100}

const calcQuantity = (tot_weight, unit_weight)=> Math.round(tot_weight/unit_weight)

dict = {
    quantity: 23 ,
    time: 0

}
const addToDb = ({station_id, rfid_id, weight})=>{
    let index = db.bucket.findIndex((bucket)=>bucket.station_id == station_id)
    db.bucket[index].rfid_id = rfid_id
    db.bucket[index].weight_study.quantity.push(calcQuantity(parseInt(weight), db.parts[db.bucket[index].part_id].unitWeight))
    return index
}
 
//fetch database
const getFromDb = ()=> db

//time study
var showTime = (index)=> {
    data_to_process = db.bucket[index].weight_study.quantity  
    // if (50 <=data_to_process[-1]<= 45){
    //     sendMailer({station_id: db.bucket[index].station_id, supply: db.parts[db.bucket[index].part_id].id})
    // }
    // let high_val_time = data_to_process.forEach((element, i) => element == db.bucket[index].capacity ? i : 0)
    // if( data_to_process[-1]===)
    // let low_val_time = data_to_process.findIndex(data_to_process[-2])
    // let res = (data_to_process[high_val_time]-data_to_process[low_val_time])/(low_val_time-high_val_time)
    // return 
}


module.exports = {addToDb, getFromDb, showTime}