// Доработать предыдущую функцию. Добавить опциональный 2-ой аргумент, отвечающий за то, через сколько промис реджектится.
function resolveAfter<T>(n: number, nErr: number = 10000): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, n, 200);
    setTimeout(reject, nErr, 404);
  });
}

//true
resolveAfter(5000, 6000).then(
  (data) => console.log(data),
  (error) => console.log(error)
);

//true
resolveAfter(5000).then(
  (data) => console.log(data),
  (error) => console.log(error)
);

//false
resolveAfter(5000, 4000).then(
  (data) => console.log(data),
  (error) => console.log(error)
);
