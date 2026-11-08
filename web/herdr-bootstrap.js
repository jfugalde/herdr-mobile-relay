const e = new URL(window.__HERDR_ENTRY__ || "/builds/0.24.0-487-1091179c54e00332/index.html", location);
  e.search = location.search;
  e.hash = location.hash;
  location.replace(e);
