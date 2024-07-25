class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element,priority) {
        this.queue.push({element, priority});
        this.sort();
    }
    dequeue(){
        if(!this.isEmpty()) {
            return this.queue.shift();
        }
        return null;
    }
    sort () {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty () {
        return this.queue.length === 0;
    }
}

function dijkstra(graph,source) {
    const vertices = Object.keys(graph).map(Number);
    const dist = {};
    const visited = {};
    const pq = new PriorityQueue({priority: (node) => dist[node]});

    for(let vertex of vertices) {
        dist[vertex] = Infinity;
        visited[vertex] = false;
    }

    dist[source] = 0;
    pq.enqueue(source);

    while(!pq.isEmpty()) {
        const {element:u,priority:distanceToU} = pq.dequeue();

        if(visited[u]) continue;
        visited[u] = true;

        for(let neighbour in graph[u]) {
            neighbour = parseInt(neighbour);
            const weight = graph[u][neighbour];

            if (dist[u] + weight <dist[neighbour]) {
                dist[neighbour] = dist[u] + weight;
                pq.enqueue(neighbour);
            }
        }
    }
    return dist;
}

const graph = {0: {1: 4, 2: 1}, 1: {3: 1}, 2: {1: 2, 3: 5}, 3: {}};
const source = 0;

const shortestPath = dijkstra(graph,source);
console.log('Shortest Path from source vertex',source,':',shortestPath);