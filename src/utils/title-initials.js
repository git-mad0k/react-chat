export default function titleInitilals(title) {
  try {  
  return title
    .split(' ')
    .map(word => word[0])
    .map(char => char[0].toUpperCase())
    .slice(0,2)
    .join('')
  } catch (e) {
    console.error(e)
    return 'error'
  }
}
