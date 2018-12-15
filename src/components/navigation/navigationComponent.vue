<template>
    <div class="nav">
        <nav class="mobile">
            <transition name="fade" mode="out-in">
                <font-awesome-icon class="menu" icon="bars" v-if="!show" @click="show = !show"/>
                <font-awesome-icon class="close" icon="times" v-else @click="show = !show"/>
            </transition>
            <transition name="fade">
            <ul v-if="show">
                <li v-for="(item, i) in menuItems" :key="`menuItems${i}`">
                    <router-link tag="a" :to="item.route">{{item.title}}</router-link>
                </li>
            </ul>
            </transition>
        </nav>
        <nav class="desctop">
            <ul>
                <li v-for="(item, i) in menuItems" :key="`menuItems${i}`">
                    <router-link tag="a" :to="item.route">{{item.title}}</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'app-navigation',
    data: function() {
        return {
            show: false
        };
    },
    computed: {
        menuItems() {
            return [
                {
                    title: "Home",
                    route: "/"
                },
                {
                    title: "contacto",
                    route: "/contact"
                }
            ];
        }
    }
};
</script>

<style scoped lang='scss' src="./style.scss"></style>