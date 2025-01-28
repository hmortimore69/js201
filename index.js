/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2203185";
}

function fn() {
  return "Harvey";
}

function sn() {
  return "Mortimore";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj) {
  if (obj.data) {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (arr[i]) {
    arr[i] = n;
  }
}

function addAll(arr) {
  return arr.reduce((accumulator, curr) => accumulator + curr, 0);
}

function larger(a, b) {
  return a > b ? a : b;
}

function largest(arr) {
  if (arr.length === 0) return null;
  return arr.reduce((largest, curr) => curr > largest ? curr : largest, arr[0]);
}

function compare(a, b) {
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }

  return arr;
}

let remembered = "";
function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

function addAllOpt(arr) {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((accumulator, curr) => accumulator + curr, 0);
}

function divisors(arr, div) {
  return arr.filter(num => num % div === 0);
}

function multiples(n, m) {
  return Array.from({ length: n }, (_, i) => (i + 1) * m);
}