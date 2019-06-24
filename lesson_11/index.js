const adress = document.querySelector('#getIpadress');

    document.querySelector('#load').addEventListener('click', ()=>{
        // const url = `http://free.ipwhois.io/json/${ip.value}`;
        const ipClient1 = 'https://api.ipify.org/?format=json' 
        const ipClient2 = 'https://api.ipdata.co/?api-key=test';
        
        const country = document.querySelector('#country');
        const town = document.querySelector('#town');

      return fetch(ipClient1)
            .then((response) =>{
                 return response.json();
                })
            .then((item)=>{
                adress.value = item.ip
                adress.style.border = '2px solid #03036d';
                adress.style.width = '250px';
                adress.style.textAlign = 'center';

            const bin =`https://api.jsonbin.io/g/${item.ip}`;

              return fetch(bin,{
                    method:'GET'
                })
                .then((response) =>{
                    return response.json()
                   })
                .then((item) =>{
                        for(let key in bin){  
                            town.value = item.data.city
                            town.style.border = '2px solid #03036d';
                            town.style.width = '250px';
                            town.style.textAlign = 'center';
                        }
                        for(let key in bin){  
                            country.value = item.data.country
                            country.style.border = '2px solid #03036d';
                            country.style.width = '250px';
                            country.style.textAlign = 'center';
                        }
                })
                .catch((err)=>console.warn(err))
            })
            .catch((err)=>console.warn(err))
        })




//*2

// const SECRET__KEY = '$2a$10$znudZAUXML.aWjknlz03fewWnWOJx8HpssyF1fwNshT6UqcoKZHJS';
// const data = {test:"test text"}
// function postData(){
//     return fetch('https://api.jsonbin.io/b', {
//          method: 'POST',
//          headers:{
//              'Content-Type': 'application/json',
//              'secret-key': SECRET__KEY,
//              'private':'true',
//              'name':'HomeBin'
//          },
//          body: JSON.stringify({test:"test text"}, undefined, 2),
//      })
//  };


// const text = document.querySelector('#text')
// const id ='5d1116927395cb45722e1e10';
// const date = text.value
//     function updateData(date){
//         return fetch('https://api.jsonbin.io/b/5d1116927395cb45722e1e10', {
//              method: 'PUT',
//              headers:{
//                 'Content-Type':'application/json',
//                  'secret-key': SECRET__KEY,
//              },
//              body: JSON.stringify({text:`${date}`})
//          })
//          .then((response)=>{
//             console.log(response)
//         })
//         .catch(err => console.warn(err))
//      }


// document.querySelector('#clicked').addEventListener("click", updateData)

