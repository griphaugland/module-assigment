import capitalize from '../../js/modules/capitalize.mjs';
export default function capitalizeTest() {
try { 
 const result = capitalize('hello')
 if(result === 'Hello') {
  console.log('Test passed')
  }
  else {
    throw new Error(`hello was not capitalized, failed`)
  }
}catch (error) {
  console.log(error)
}
}