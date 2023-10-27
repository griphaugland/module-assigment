import multiply from '../../js/modules/multiply.mjs';
export default function multiplyTest() {
try { 
  const result = multiply(2, 2)
  if(result !== 4){
      throw new Error(`Expected 4, but received ${result}`)
  }
  else {
    console.log("Test passed")
  }
}catch (error) {
  console.log(error)
}
}
