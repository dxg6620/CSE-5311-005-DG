class Dijkstra {
    graph: { [key: string]: { [key: string]: number } };

    constructor(graph: { [key: string]: { [key: string]: number } }) {
        this.graph = graph;
    }

    findShortestPaths(source: string): { [key: string]: number } {
        const distances: { [key: string]: number } = {};
        const visited = new Set<string>();
        const priorityQueue: [number, string][] = [];

        // Initialize distances
        for (const node in this.graph) {
            distances[node] = Infinity;
        }
        distances[source] = 0;
        priorityQueue.push([0, source]);

        while (priorityQueue.length > 0) {
            priorityQueue.sort((a, b) => a[0] - b[0]);
            const [currentDistance, currentNode] = priorityQueue.shift()!;

            if (visited.has(currentNode)) continue;
            visited.add(currentNode);

            for (const neighbor in this.graph[currentNode]) {
                const weight = this.graph[currentNode][neighbor];
                const newDist = currentDistance + weight;

                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    priorityQueue.push([newDist, neighbor]);
                }
            }
        }

        return distances;
    }
}

const dijkstraGraph = {
    s: { t: 10, y: 5 },
    t: { x: 1, y: 3 },
    y: { t: 2, z: 2, x: 7 },
    x: { z: 6 },
    z: { x: 4 },
};
const dijkstra = new Dijkstra(dijkstraGraph);
const dijkstraResult = dijkstra.findShortestPaths("s");
console.log("Dijkstra's Algorithm Result:", dijkstraResult);

//Dijkstra's Algorithm Result: { s: 0, t: 7, y: 5, x: 8, z: 7 }
