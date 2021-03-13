export function condition(slug) {
  switch(slug) {
    case 'storm':
      return {
        name: 'rainy-outline',
        color: '#1ec9ff'
      }
    case 'clear_day':
      return {
        name: 'partly-sunny-outline',
        color: '#ffb300'
      }
    case 'rain':
      return {
        name: 'rainy-outline',
        color: '#1ec9ff'
      }
    default:
      return {
        name: 'rainy-outline',
        color: '#1ec9ff'
      }
  }
}
