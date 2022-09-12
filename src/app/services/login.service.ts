export class LoginService {

  users = [
    {
        username : "Aakash",
        password : "aak123"
    },
    {
        username : "Abhishek",
        password : "abh123"
    },
    {
        username : "Ayush",
        password : "ayu123"
    },
    {
        username : "Bhagyam",
        password : "bha123"
    },
    {
        username : "Shiv",
        password : "shi123"
    }]

    loginAuthenticate(username: string, password: string) {

      for (var user of this.users){
        if (user.username === username && user.password === password){
          return true
        }
      }

      return false
      }
}