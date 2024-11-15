class Edge {
  constructor(public src: string, public dest: string, public weight: number) {}
}

class Kruskal {
  private edges: Edge[];
  private parent: Map<string, string>;

  constructor(vertices: string[]) {
    this.edges = [];
    this.parent = new Map();
    for (let v of vertices) {
      this.parent.set(v, v);
    }
  }

  addEdge(src: string, dest: string, weight: number) {
    this.edges.push(new Edge(src, dest, weight));
  }

  find(v: string): string {
    if (this.parent.get(v) !== v) {
      this.parent.set(v, this.find(this.parent.get(v)!));
    }
    return this.parent.get(v)!;
  }

  union(v1: string, v2: string) {
    const root1 = this.find(v1);
    const root2 = this.find(v2);
    if (root1 !== root2) {
      this.parent.set(root1, root2);
    }
  }

  kruskalMST(): Edge[] {
    const result: Edge[] = [];
    this.edges.sort((a, b) => a.weight - b.weight);

    for (let edge of this.edges) {
      const { src, dest, weight } = edge;
      if (this.find(src) !== this.find(dest)) {
        result.push(edge);
        this.union(src, dest);
      }
    }

    return result;
  }
}

const kruskalGraph = new Kruskal(["a", "b", "c", "d", "e", "f", "g", "h", "i"]);

kruskalGraph.addEdge("a", "b", 4);
kruskalGraph.addEdge("a", "h", 8);

console.log("Kruskal's MST: ", kruskalGraph.kruskalMST());
//"Kruskal's MST: ",  [Edge: {
 // "src": "a",
  //"dest": "b",
  //"weight": 4
//}, Edge: {
 // "src": "a",
  //"dest": "h",
  //"weight": 8
//}] 
