let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

String.prototype.removeDuplicate = function () {
  let words = this.split(' ');
  let uniqueWords = [...new Set(words)];
  return uniqueWords.join(' ');
};

console.log(x.removeDuplicate());