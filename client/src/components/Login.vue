<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    name="email"
                    label="Email"
                    type="email"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    required></v-text-field>
                  <v-text-field
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                    :rules="[rules.required, rules.password]"
                    required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      rules: {
        required: (value) => !!value || 'Required.',
        password: (value) => {
          const pattern = /^[a-zA-Z0-9]{8,32}$/
          return pattern.test(value) || 'Invalid password'
        },
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
        console.log(error.response.data.error)
      }
    }
  },
  props: {
    source: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
