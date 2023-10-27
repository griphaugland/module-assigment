import usdToEur from '../../js/modules/usdToEur.mjs';
export default function usdToEurTest() {
try { 
  const result = usdToEur(1)
  if(result !== 0.85){
      throw new Error(`Expected 0.85, but received ${result}`)
  }
  else {
  console.log("Test passed")
  }
}catch (error) {
  console.log(error)
}
}
