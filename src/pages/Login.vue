<template>
  <div class='absolute-center' >
     <q-card class='c-card'>
        <div class='row justify-center' >
                  <img :src="logo" style='height: 250px; max-width: 250px'  >
        </div>
      <q-card-section>
          <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    autocomplete='off'
          >
              <q-input
                         outlined lazy-rules  bottom-slots :dense="true"
                         label='User Name *'
                         :rules="rules['user_name']"
                         v-model="values['user_name']"
                         :error="!!errors['user_name']"
                         :error-message="errors['user_name']"
                         @focus="errors['user_name']=''"
                      >

                        <template v-slot:append>
                          <q-icon
                            :name="'lock'"
                          />
                        </template>
                </q-input>
                 <q-input
                        outlined lazy-rules  bottom-slots :dense="true"
                         label='Password *'  hint='minimum 6 chars'
                         :type="isPwd ? 'visibility_off' : 'visibility'"
                         :rules="rules['password']"
                         v-model="values['password']"
                         :error="!!errors['password']"
                         :error-message="errors['password']"
                         @focus="errors['password']=''"
                      >

                        <template v-slot:append>
                          <q-icon
                           :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                             @click="isPwd = !isPwd"
                          />
                        </template>
                </q-input>
          
          <q-btn color='secondary' class='full-width q-mt-sm' type='submit'  > Login </q-btn>
          <q-btn color='negative' class='full-width q-my-md' > Forgot Password</q-btn>
          <q-btn color='primary'  class='full-width q-mb-sm' type='reset' >Reset</q-btn>
          </q-form>
     
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import {utilService,validationsService} from '../services'
import {mapActions} from 'vuex'

export default {
      mixins:[
              utilService.toMixin(validationsService),
             ],

    data(){
      return({
          isPwd:true,
          logo:require("../assets/ToDo.png"),

        //============
        values:{
            user_name:"",
            password:""
        },
         rules:{
            user_name:[this.required()],
            password:[this.required(),this.minLength(6)]
        }, 
        errors:{}

      })
    },
    methods:{
                  ...mapActions('auth', ['login', 'logout']),

  async  onSubmit () {
          try {
            this.loading=true

            await this.login(this.values)
            this.loading=false
            this.$router.push("/home")
      } catch (error) {
        this.loading=false
        this.errors=error.errors
      }


    },

    onReset () {
        this.values={}
        this.errors={}
      }
    },
    created(){
    }
}
</script>

<style>

</style>
