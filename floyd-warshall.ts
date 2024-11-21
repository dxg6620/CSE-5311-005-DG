class FloydWarshall {
    graph: number[][];

    constructor(graph: number[][]) {
        this.graph = graph;
    }

    findShortestPaths(): number[][] {
        const dist = this.graph.map((row) => [...row]);
        const V = this.graph.length;

        for (let k = 0; k < V; k++) {
            for (let i = 0; i < V; i++) {
                for (let j = 0; j < V; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        return dist;
    }
}

const floydWarshallGraph = [
    [0, 1, Infinity, 2, Infinity, Infinity],
    [Infinity, 0, 2, Infinity, 7, Infinity],
    [Infinity, Infinity, 0, Infinity, Infinity, 10],
    [-4, Infinity, Infinity, 0, 3, Infinity],
    [Infinity, -1, Infinity, Infinity, 0, 5],
    [Infinity, Infinity, -8, Infinity, Infinity, 0],
];

const floydWarshall = new FloydWarshall(floydWarshallGraph);
const floydWarshallResult = floydWarshall.findShortestPaths();
console.log("Floyd-Warshall Algorithm Result:");
console.table(floydWarshallResult);

/*
Floyd-Warshall Algorithm Result:
 [[-2, -1,  0,  0,  3,  8],
 [inf,  0,  2, inf,  7, 12],
 [inf, inf,  0, inf, inf, 10],
 [-6, -5, -4, -4, -1,  4],
 [inf, -1, -3, inf,  0,  5],
 [inf, inf, -8, inf, inf,  0]]
*/
