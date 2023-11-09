
const PaypackJs = require("paypack-js").default;
const paypack =  PaypackJs.config({
  client_id: "cbe3c656-7d70-11ee-a21f-deaddb65b9c2",
  client_secret:
    "e39af7b8d019fab24468cd8c18b0cfb4da39a3ee5e6b4b0d3255bfef95601890afd80709"
})
   export  const cashing=(req,res)=>
   {
    paypack.cashin({
    number: req.body.telphonenumber,
    amount: req.body.amount,

    environment: "production",
  })
  .then((response) => { 
    console.log("information", response.data);
    res.status(200).json(response.data );
  })
  .catch(err => {
    console.log("error in cashin -------------------------------------------------------------------",err);
  });
}

//   export const cashout= (req,res)=>{
//     paypack
//       .cashout({
//         number: "0798088416",
//         amount: 100,
//         environment: "development/production"
//       })
//       .then(res => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     paypack
//       .transactions({ offset: 0, limit: 100 })
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
      
//   }
  
// paypack
//   .events({ offset: 0, limit: 100 })
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// paypack
//   .me()
//   .then(res => {
//     console.log(res.data);
//   })
//   .catch(err => {
//     console.log(err,"==================");
//   });


