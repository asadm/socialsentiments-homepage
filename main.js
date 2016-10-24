
function HLog(title, data) {
    if (window.heap) {
        console.log("Heap Log:" + title, data);
        heap.track(title, data);
    }
}

HLog("HomePage");
