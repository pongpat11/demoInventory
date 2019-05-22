<template>
    <div>
    <input type="text" v-model="message">
    <button v-on:click = "submit">Press</button>
    
    <br>
    <item v-for="(td, index) in todo" :key="index" v-bind:text = 'td'></item>
    </div>
</template>

<script>
import item from '../components/item';
export default {
    data(){

        return{
            message: '',
            
        }
    },
    methods:{

        submit(){
            this.$store.dispatch("addTodo", this.message)
            this.message = ''

        },
        
        
    },
    components:{

        item
    },
    computed:{
        todo(){
            return this.$store.state.todo
        }
    }
}
</script>

<style>

</style>
