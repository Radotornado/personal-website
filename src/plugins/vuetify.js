import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                upstream: "#e41770",
                coins: "#066db6"
            }
        }
    }
});
