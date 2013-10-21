// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function rLater(e) {
  e.preventDefault();
  chrome.tabs.executeScript(null,
      {file:"bookmarklet.js"});
  window.close();
}

function tView(e) {
  e.preventDefault();
  chrome.tabs.executeScript(null,
      {file:"textView.js"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var readLater = document.getElementById('readLater');
    readLater.addEventListener('click', rLater);
  var textView = document.getElementById('textView');
    textView.addEventListener('click', tView);
});

/* document.addEventListener('DOMContentLoaded', function () {
  var textView = document.getElementById('textView');
    textView.addEventListener('click', tView);
}); */