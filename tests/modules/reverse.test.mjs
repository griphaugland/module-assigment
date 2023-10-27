import reverse from '../../js/modules/reverse.mjs';
export default function reverseTest() {
try { 
  const result = reverse("Reverse")
  if(result !== "esreveR"){
      throw new Error(`Expected esreveR, but received ${result}`)
  }
  else {
    console.log("Test passed")
  }
}catch (error) {
  console.log(error)
}
}
