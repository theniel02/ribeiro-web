export default {
    set:(token) => {
        localStorage.setItem('token-ribeiro-api', token);
      },
      
    get: () => {
          return localStorage.getItem('token-ribeiro-api');
      }
}