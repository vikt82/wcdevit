<template>
    <nav>
        <ul>
            <li v-for="(item, i) in menuItems" :key="`menuItems${i}`">
                <router-link tag="a" :to="item.route">{{item.title}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'app-navigation',
    data: function() {
        return {};
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