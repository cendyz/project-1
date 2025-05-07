export default defineNuxtPlugin(() => {
    const theme = localStorage.getItem('my-theme')
  
    if (theme === 'true') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  })