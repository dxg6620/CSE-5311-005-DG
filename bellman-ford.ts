class BellmanFord {
    vertices: string[];
    edges: [string, string, number][];

    constructor(vertices: string[], edges: [string, string, number][]) {
        this.vertices = vertices;
        this.edges = edges;
    }

    findShortestPaths(source: string): { [key: string]: number } | string {
        const distances: { [key: string]: number } = {};
        for (const vertex of this.vertices) {
            distances[vertex] = Infinity;
        }
        distances[source] = 0;

        for (let i = 0; i < this.vertices.length - 1; i++) {
            for (const [u, v, weight] of this.edges) {
                if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                }
            }
        }

        for (const [u, v, weight] of this.edges) {
            if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                return "Graph contains a negative weight cycle";
            }
        }

        return distances;
    }
}
const bellmanFordVertices = ["s", "t", "x", "y", "z"];
const bellmanFordEdges: [string, string, number][] = [
    ["s", "t", 6],
    ["s", "y", 7],
    ["t", "x", -2],
    ["t", "y", 8],
    ["y", "z", 9],
    ["y", "x", -3],
    ["x", "z", 7],
    ["z", "t", 2],
];

const bellmanFord = new BellmanFord(bellmanFordVertices, bellmanFordEdges);
const bellmanFordResult = bellmanFord.findShortestPaths("s");
console.log("Bellman-Ford Algorithm Result:", bellmanFordResult);

//Bellman-Ford Algorithm Result: { s: 0, t: 6, x: 4, y: 7, z: 11 }
