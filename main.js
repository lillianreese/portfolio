
function reloadPageOnError() {
    window.onerror = function () {
      window.location.reload();
    };
  }