class Graph {
  private adjList: Map<string, string[]>;

  constructor(vertices: string[]) {
    this.adjList = new Map();
    for (let v of vertices) {
      this.adjList.set(v, []);
    }
  }

  addEdge(v: string, w: string) {
    this.adjList.get(v)?.push(w);
  }

  topologicalSortUtil(v: string, visited: Set<string>, stack: string[]) {
    visited.add(v);

    const neighbors = this.adjList.get(v);
    if (neighbors) {
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.topologicalSortUtil(neighbor, visited, stack);
        }
      }
    }

    stack.push(v);
  }

  topologicalSort(): string[] {
    const stack: string[] = [];
    const visited = new Set<string>();

    for (let vertex of this.adjList.keys()) {
      if (!visited.has(vertex)) {
        this.topologicalSortUtil(vertex, visited, stack);
      }
    }

    return stack.reverse();
  }
}

const vertices = ["undershorts", "pants", "belt", "shirt", "tie", "jacket", "socks", "shoes", "watch"];
const graph = new Graph(vertices);

// Adding edges based on your example
graph.addEdge("undershorts", "pants");
graph.addEdge("undershorts", "shoes");
graph.addEdge("pants", "belt");
graph.addEdge("pants", "shoes");
graph.addEdge("shirt", "belt");
graph.addEdge("shirt", "tie");
graph.addEdge("tie", "jacket");
graph.addEdge("belt", "jacket");
graph.addEdge("socks", "shoes");

console.log("Topological Sort: ", graph.topologicalSort());
//Topological Sort: ",  ["watch", "socks", "shirt", "tie", "undershorts", "pants", "shoes", "belt", "jacket"] 
