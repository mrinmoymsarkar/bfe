//https://bigfrontend.dev/problem/find-the-single-integer
unction findSingle(arr) {
  // your code here
  let res = 0
  console.log('res', res)
  for(let i = 0 ; i<arr.length ; i++){
    res = res ^ arr[i]
    } 
    return res
  }

 const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr)
