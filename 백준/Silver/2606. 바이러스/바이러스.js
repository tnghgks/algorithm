const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .filter((v) => v !== "");

const computers = parseInt(input.shift());
const connectedList = input.slice(1).map((item) => item.split(" ").map((v) => parseInt(v)));

const graph = [...Array(computers + 1)].map(() => []);
connectedList.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

function DFS(graph, start) {
  const stack = [start];
  const visited = Array(computers + 1).fill(false);
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      stack.push(...graph[node]);
    }
  }
  return visited.filter((v) => v === true).length;
}
const result = DFS(graph, 1) - 1;

console.log(result);
