let person = {name: 'Маг', health: 90}
export default function state({name, health}){
  console.log(name)
  if (health > 50){
    return 'healthy'
  } else {
    if (health >= 15){
      return 'wounded'
    } else {
      return 'critical'
    }
  }
}
state(person)
