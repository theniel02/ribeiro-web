<template>
  <div class="page">
    <b-form @submit.prevent="log()" class="form-margin">
      <b-form-group id="input-group" 
        label="Login:"
        label-for="login"

      >
        <b-form-input
          class="input"
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Seu email"
         />

          <b-form-input
          class="input"
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="Sua Senha"
         />

         <b-button class="button" type="submit" variant="danger">Entrar</b-button>
      </b-form-group>
    </b-form>
         <b-button class="button" type="submit" variant="warning">Esqueci minha senha</b-button>
  </div>
</template>

<script>
import LoginService from '../services/LoginService'

export default {

  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    log() {
      LoginService.auth();
      console.log(this.form.password);
    }
  }
}
</script>

<style>
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