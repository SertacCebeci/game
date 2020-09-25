<template>
    <div>
        <p>{{health}}</p>
        <p>{{mana}}</p>
        <button v-for="(skill, idx) in skills"
            :key="idx"
            @click="use(skill._key)"
        >{{skill.name}}<br>costs: {{skill.cost}}</button>
    </div>
</template>


<script>
import SKILLS from './GameObjects/SKILLS'


export default {
    data(){
        return {
            health: 100,
            mana: 100,
            skills: [
                SKILLS.base_attack,
                SKILLS.power_attack
            ]
        }
    },
    methods: {
        use(skey){
            SKILLS[skey].util(this, {health: 100})
        }
    },
}
</script>