const firstPromiese = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Acync is completed");
    resolve();
  }, 2000);
});
firstPromiese.then(function () {
  console.log("promise consumed");  
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ email: "mason@gmail.com", name: "mason" });
  }, 2000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Mukesh", password: "123" });
    } else {
      reject("error: somthing went worng");
    }
  }, 3000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("our promise is either resolved or rejected");
  });

// fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
