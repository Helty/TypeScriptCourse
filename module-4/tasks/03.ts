// Создать функцию, которая возвращает промис, который резолвится через n миллисекунд.

function resolveAfter<T>(n: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(resolve, n, 200);
  });
}

resolveAfter(5000).then((data) => console.log(data));
