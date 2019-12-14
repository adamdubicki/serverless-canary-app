import Vuetify from 'vuetify/lib'
import { VuetifyPreset } from 'vuetify/types/presets';

const opts: Partial<VuetifyPreset> = {
  theme: {
    dark: true,
  },
}

export default new Vuetify(opts)