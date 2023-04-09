const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

const computers = parseInt(input.shift());
const [networks] = input.shift().split(" ").map(Number);
const edges = input.map((v) => v.split(" ").map(Number));

const graph = [...Array(computers + 1)].map(() => []);

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (start) => {
  const stack = [start];
  const visited = Array(computers + 1).fill(false);
  const order = [];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      order.push(node);
      stack.push(...graph[node]);
    }
  }
  return order.join(" ");
};

graph.forEach((v) => v.sort((a, b) => b - a));

let answer = dfs(1).split(" ").map(Number);

console.log(answer.length - 1);
