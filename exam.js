/* [id , brand , model , type , pricePerDay, available] */
carBooking =[
    [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
    [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
    [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
    [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
    [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];
//print all car brands
console.log('print all car brands');
carBooking.forEach(item => {
console.log(item[1]);
});

//print total number of cars available
console.log('print total number of cars available');
totalcars=carBooking.map(item=>item[5]).reduce((car1,car2)=>car1+car2)
console.log(totalcars);
//print sedan car details
console.log('print sedan details');
sedan = carBooking.filter((item) => item[3] == 'Sedan')
console.log(sedan);
console.log('---------');
//print cars with price per day greater than 60
console.log('print cars with price per day greater than 60');
sixty = carBooking.filter(item =>item[4]>60)
console.log(sixty);
console.log('---------');
//print details of jeep wrangler
console.log('details of jeep wrangler');
jeepwrangler=carBooking.find((item)=>item[1]=='Jeep')
console.log(jeepwrangler);
//sort cars based on the descending order of the price per day
console.log('sort cars based on the descending order of the price per day');
carBooking.sort((item1,item2) => item2[4] - item1[4]).forEach(pro=>console.log(pro[1]))
//sort cars based on ascending order or available cars
console.log('sort cars based on ascending order or available cars');
carBooking.sort((item1,item2) => item1[5] - item2[5]).forEach(pro=>console.log(pro[1]))
//find the car with most available cars
console.log('find the car with most available cars');
costly =carBooking.reduce((item1, item2) => item1[5] > item2[5] ? item1 : item2)
console.log(costly[1]);
//calculate the revenue if all cars are rented for a day
console.log('calculate the revenue if all cars are rented for a day');
totrev=carBooking.map(item=>item[5]).reduce((case1,case2)=>case1+case2)
console.log(totrev);
//count the number of sedan cars
console.log('count the number of sedan cars');
totalsedan = carBooking.filter((item) => item[3] == 'Sedan')
console.log(totalsedan);
console.log(`total number of sedan is ${totalsedan.length}`);
console.log('---------');
//11. find the car with highest availability????
console.log('car having maximum availability');
maxavail = carBooking.reduce((item1, item2) => item1[5] > item2[5] ? item1 : item2)
console.log(maxavail[1]);
//12. print all unique car brands
console.log('unique car brands');
carBooking.forEach(item => {
console.log(item[1]);
});
//13. find the total number of avialable car for all type
console.log('find the total number of avialable car for all type');
//14. find the car with least available car
console.log('car having least availability');
leastavail = carBooking.reduce((item1, item2) => item1[5] < item2[5] ? item1 : item2)
console.log(leastavail[1]);
//15.check if there is any car with price per day of exactly 55
console.log('price per day of exactly 55');
ppd55=carBooking.some(item=>item[4]==55)
console.log(ppd55?'yes':'no');