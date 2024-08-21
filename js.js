//localStorage.setItem('data', 10)
//console.log(localStorage.getItem('data'))

//let a = [1,2,3]
//localStorage.setItem('data', a)
//localStorage.setItem('data', JSON.stringify(a))


//let b = localStorage.getItem('data')
//console.log(b[2])
//b = JSON.parse(b)
//console.log(b)

//console.log(b[2])
//console.log(typeof(b))

//localStorage.clear;


//let xhttp = new XMLHttpRequest();

//xhttp.onreadystatechange  = function(){
 // if(this.readyState == 4 && this.status == 200){
   //   myfunc(this.responseText)
//  }
//}

//xhttp.open('GET', 'https://www.kufar.by/')
//xhttp.send()


//function myfunc (data){
 // console.log(data)
//}

//fetch('https://www.kufar.by/')

//.then(data => {
 // console.log(data)
  //data.text().then(data2 =>{
  //  console.log(data2)
 // })
//})


//fetch('https://www.kufar.by/')

//.then(data => {
 // console.log(data)
//  return data.text()
//})

//.then(data => {
//  console.log(data)
//  })

//.then(data => data.text())
//.then(data => {
//console.log(data)
//})


let myPromise = new Promise((resolve, reject) => {
  fetch('https://www.kufar.by/')
  .then(data => {
    resolve(data.text())
    });
});

let myPromise2 = new Promise((resolve, reject) => {
  fetch('https://www.sports.ru/')
  .then(data => {
    resolve(data.text())
    });
});


Promise.all([myPromise, myPromise2]).then(data => {
  console.log(data)
})


//myPromise.then (data =>{
//  console.log(data)
//})