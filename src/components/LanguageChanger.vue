<template>
  <div class="locale-changer">
    <v-container>
      <v-row>
        <v-col lg="5" md="5" sm="8" cols="8">
          <v-select v-model="$i18n.locale" :items="langs" class="mt-6" label="English" item-text="full" item-value="short" 
                single-line item-color="black">
          </v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.theme--light.v-list {
  background: #d8d8d8;
}
</style>

<script>
export default {
  props:{'isDark':Boolean},
  name: 'locale-changer',
  data () {
    return {
        langs: [ 
          {short:'en', full:'English'}, 
          {short:'de', full:'Deutsch'}, 
          {short:'bg', full:'Български'}
        ]
      }
  }
}
</script>