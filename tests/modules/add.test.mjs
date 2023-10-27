import add from '../../js/modules/add.mjs';
export default function addTest() {
  try { 
    const result =  add(1, 2)
    if(result !== 3) 
    throw new Error(`Expected 3, but received ${result}`)
  }catch (error) {
    console.log(error, "The parameters needs to be numbers")
  }
}
