//object and object methods
let car={
    brand:'toyota',
    model:'corolla',
    year:2020,
    displayinfo:function(current){
        return current - this.year;
    }
}
let bike={
    brands:'vespa',
    years:2021
}
let car1=Object.create(car)
console.log(car.brand+" "+car.model+" "+car.year+" "+car.displayinfo(2024))
console.log(car.displayinfo(2025))
console.log(Object.keys(car));
console.log(Object.values(car))
console.log(Object.entries(car)) 
console.log(Object.assign(car,bike))
console.log(car.hasOwnProperty('displayinfo'))
console.log(car1.brand+" "+car.model)
console.log(car)