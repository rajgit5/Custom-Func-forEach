function forEachCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }

}

function callback(val) {
    console.log(val);
    
}

let input = [1,2,3,4,5,6];
forEachCustom(input, callback);

