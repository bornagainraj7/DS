// Graph: Breadth First Search 

function Bfs(graph, root) {
    var nodeLen = {};

    for (var i = 0; i < graph.length; i++) {
        nodeLen[i] = Infinity;
    }
    nodeLen[root] = 0;

    var queue = [root];
    var current;
    // console.log(nodeLen);
    // console.log(queue);

    while (queue.length != 0) {
        current = queue.shift();

        var curConnected = graph[current];
        // console.log(curConnected);
        var neighborIndex = [];
        var index = curConnected.indexOf(1);

        while (index != -1) {
            neighborIndex.push(index);
            index = curConnected.indexOf(1, index + 1);
        }
        // console.log(neighborIndex);
        for (var j = 0; j < neighborIndex.length; j++) {
            if (nodeLen[neighborIndex[j]] == Infinity) {
                nodeLen[neighborIndex[j]] = nodeLen[current] + 1;
                queue.push(neighborIndex[j]);
            }
        }
    }
    return nodeLen;
};

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
];

console.log(Bfs(exBFSGraph, 1));