<template>
  <div class="side-menu">
      <div class="toggle-menu">
            <b-button v-b-toggle.sidebar-menu variant="danger">
                <b-icon class="icon" icon="menu-button-wide"></b-icon>
            </b-button>

      </div>
    <b-sidebar id="sidebar-menu" bg-variant="dark" shadow>
      <div class="menu">
        <b-list-group class="menu">
            <b-list-group-item to="#some-link">Corridas</b-list-group-item>
            <b-list-group-item to="#" bg-variant="dark">Mensagens</b-list-group-item>
            <b-list-group-item to="#" bg-variant="dark">Clientes</b-list-group-item>
            <b-list-group-item to="#foobar" bg-variant="dark" >Relatórios</b-list-group-item>
        </b-list-group>
</div>
    </b-sidebar>
  </div>
</template>

<style scoped>
    .toggle-menu{
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        position: absolute;
        top: 6px;
        left: 14px
    }

    .icon{
        position: relative;
        top: 2px;
    }
    .b-sidebar-header{
        text-align: right;
    }
    .menu{
        border-radius: 0;
        margin-top: 10px;
    }
</style>