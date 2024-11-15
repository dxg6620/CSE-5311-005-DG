class DFS {
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

  depthFirstSearch(start: string): string[] {
    const visited = new Set<string>();
    const result: string[] = [];

    const dfs = (v: string) => {
      visited.add(v);
      result.push(v);

      const neighbors = this.adjList.get(v);
      if (neighbors) {
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            dfs(neighbor);
          }
        }
      }
    };

    dfs(start);
    return result;
  }

  depthFirstSearchFromAllNodes(): Record<string, string[]> {
    const allVisitedResults: Record<string, string[]> = {};
    const globalVisited = new Set<string>();

    for (let vertex of this.adjList.keys()) {
      if (!globalVisited.has(vertex)) {
        const traversalResult: string[] = [];
        
        const dfs = (v: string) => {
          globalVisited.add(v);
          traversalResult.push(v);

          const neighbors = this.adjList.get(v);
          if (neighbors) {
            for (let neighbor of neighbors) {
              if (!globalVisited.has(neighbor)) {
                dfs(neighbor);
              }
            }
          }
        };

        dfs(vertex);
        allVisitedResults[vertex] = traversalResult;
      }
    }

    return allVisitedResults;
  }
}

const dfsGraph = new DFS(["q", "s", "t", "v", "w", "x", "y", "z", "r", "u"]);

dfsGraph.addEdge("q", "s");
dfsGraph.addEdge("q", "t");
dfsGraph.addEdge("s", "v");
dfsGraph.addEdge("v", "w");
dfsGraph.addEdge("w", "x");
dfsGraph.addEdge("t", "x");
dfsGraph.addEdge("x", "y");
dfsGraph.addEdge("y", "z");
dfsGraph.addEdge("r", "u");
dfsGraph.addEdge("u", "y");

console.log("DFS from node q:", dfsGraph.depthFirstSearch("q"));
console.log("DFS starting from all unvisited nodes:", dfsGraph.depthFirstSearchFromAllNodes());

//DFS from node q: [ 'q', 's', 'v', 'w', 'x', 'y', 'z', 't' ]
//DFS starting from all unvisited nodes: {
 // q: [ 'q', 's', 'v', 'w', 'x', 'y', 'z', 't' ],
  //r: [ 'r', 'u', 'y' ]
//}
