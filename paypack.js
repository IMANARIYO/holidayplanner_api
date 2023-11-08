//import PaypackJs from "paypack";
// const paypack = PaypackJs.config({
  //  client_id: process.env.APPLICATION_ID,
  //  client_secret: process.env.APPLICATION_SECRET
// });
const PaypackJs = require("paypack-js").default;
const paypack = new PaypackJs({
  client_id: "cbe3c656-7d70-11ee-a21f-deaddb65b9c2",
  client_secret:
    "e39af7b8d019fab24468cd8c18b0cfb4da39a3ee5e6b4b0d3255bfef95601890afd80709"
});
console.log("some secret.............",paypack.client_id)
paypack
  .cashin({
    number: "0787795163",
    amount: 100,
    environment: "development/production"
  })
  .then(res => { 
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
  // paypack
  //   .cashout({
  //     number: "0798088416",
  //     amount: 100,
  //     environment: "development/production"
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
    paypack
      .transactions({ offset: 0, limit: 100 })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
paypack
  .events({ offset: 0, limit: 100 })
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });
paypack
  .me()
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  });


