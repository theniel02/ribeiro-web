<template>
  <div class="page">
    <div>
      <img class="logo-image" src="../assets/image/logo.png" fluid alt="Responsive image">
    </div>
      <form>
        <div class="form-group">
          <input v-model=form.email type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu Email">
        </div>
        <div class="form-group">
          <input v-model=form.password type="password" class="form-control" id="exampleInputPassword1" placeholder="Sua Senha">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input">
          <label class="form-check-label">Manter-me Conectado</label>
        </div>
        <button class="btn btn-danger" @click=signIn(form.email)>Entrar</button>
        <button class="btn btn-warning" @click=signIn(form.password)>Esqueci minha senha</button>
      </form>
  </div>
</template>

<script>
import LoginService from '../services/LoginService'
import { mapState, mapActions } from 'vuex'

export default {

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      ...mapState({
        isAuthenticated: state => state.isAuthenticated
      })
    }
  },
  methods: {
    log() {
      LoginService.auth();
      console.log(this.form.password);
    },
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    ...mapActions([
      'signIn', 'signOut'
    ])
  }
}
</script>

<style scoped>

button { 
  font-size: 90%;
  width: 100%;
}
.logo-image{
  margin-top: 70px;
  margin-bottom: 20px;
  width:50%;
  max-width: 300px;
}
.form-margin, #input-group{
  margin-bottom: 2px;
}
.button{
  padding: 2px !important;
  width:100%;
  border-radius: 0 !important;
  margin-bottom: 5px;
}

.input{
  margin-bottom: 10px;
  width: 100%;
  border-radius: 0px;
}

.input::-webkit-focus-outer{
  box-shadow: 0px 0px 10px red;
}

.input::placeholder {
    text-align: center;
    font-size: 13px;
    vertical-align: middle;
    padding-bottom: 3px;
}

.page {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>