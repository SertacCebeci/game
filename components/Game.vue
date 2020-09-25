<template>
    <div>
        <Player />
        <p>{{count}}</p>
        <button @click="increment">
            annen
        </button>
    </div>
</template>


<script>

import Player from './Player'

export default {
    data(){
        return {
            count: 0
        }
    },
    methods: {
        increment(){
            this.count++
        }
    }
}
</script>