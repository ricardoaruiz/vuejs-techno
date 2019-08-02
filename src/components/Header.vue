<template>
    <header>
        <nav>
            <span>
                <router-link to="/" tag="span">Techno</router-link>
            </span>
            <ul>
                <router-link tag="li"  to="/">Home</router-link>
                <router-link tag="li" :to="{ name : 'cursos' }">Cursos</router-link>
                <router-link tag="li" :to="{ name : 'contato' }">Contato</router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header {
        background: rgba(0,0,0,.3);
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;        
        max-width: 1300px;
        margin: 0 auto;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding: 20px 15px;
        cursor: pointer;
        color: inherit;
    }
    li.router-link-exact-active {
        background: rgba(0,0,0,.4);
        color: #fff;
    }
    nav span {
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }
</style>
