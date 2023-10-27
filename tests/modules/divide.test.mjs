import divide from '../../js/modules/divide.mjs';
export default function divideTest() {
try { 
  const result = divide(2, 1)
  if(result !== 2){
      throw new Error(`Expected 2, but received ${result}`)
  }
else {
  console.log("Test passed")
}
}catch (error) {
  console.log(error)
}
}
