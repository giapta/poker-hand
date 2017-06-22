// shuffle a array
Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

// random a element in array
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

// random checking different value
Array.prototype.randomDiffElement = function(last) {
   if (this.length == 0) {
      return;
   } else if (this.length == 1) {
      return this[0];
   } else {
      var num = 0;
      do {
         num = Math.floor(Math.random() * this.length);
      } while (this[num] == last);
      return this[num];
   }
}
