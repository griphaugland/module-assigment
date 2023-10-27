import eurToUsd from '../../js/modules/eurToUsd.mjs';
export default function eurToUsdTest() {
try { 
  const result = eurToUsd(1)
  if(result !== 1.18){
      throw new Error(`Expected 1.18, but received ${result}`)
  }
  else {
  console.log("Test passed")
  }
}catch (error) {
  console.log(error)
}
}
