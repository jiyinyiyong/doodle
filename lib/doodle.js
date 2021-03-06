// Generated by CoffeeScript 1.6.3
(function() {
  var delay, hostname, ws;
  hostname = location.hostname;
  ws = new WebSocket("ws://" + hostname + ":7776");
  ws.onmessage = function(message) {
    if (message.data === 'reload') {
      console.log('reload event');
      return location.reload();
    }
  };
  delay = function(t, f) {
    return setTimeout(f, t);
  };
  return ws.onclose = function() {
    console.log('closed');
    return delay(1000, function() {
      return location.reload();
    });
  };
})();
