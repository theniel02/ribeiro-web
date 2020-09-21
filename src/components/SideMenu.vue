<template>
  <div class="side-menu">
    <div id="sidenav" class="sidenav">
        <router-link v-for="item in menuItems" class="link" @click.native="changePage(item.name)" :to=item.path :key="item.path">
          {{item.name}}
        </router-link>
        
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return { 
      menuItems: [
        { name: "Solicitar Corrida", path: "order" },
        { name: "Mensagens", path: "message" },
        { name: "Relatorios", path: "report" },
        { name: "Meus Dados", path: "my-data" }
      ]
    }
  },

  methods: {
    ... mapActions ([
      'changePage'
    ])
  }
}
</script>

<style scoped>

.sidenav {
  height: 100%; 
  width: 250px;
  top: 0;
  left: 0;
  background-color: rgb(44, 0, 0); 
  padding-top: 53px; 
}

.sidenav .link {
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 15px;
  color: #ffffff;
  display: block;
  background-color: #000000cc;
  transition: 0.3s;
  margin-bottom:3px;
  cursor: pointer;
}

.sidenav a:hover {
  color: #f1f1f1;
  background-color: #00000000;

}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

    
</style>