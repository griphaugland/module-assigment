import subtract from '../../js/modules/subtract.mjs';
export default function subtractTest() {
try { 
  const result = subtract(5, 3)
  if(result !== 2)
      throw new Error(`Expected 2, but received ${result}`)
  else {
    console.log("Test passed")
  }
}catch (error) {
  console.log(error)
}
}
