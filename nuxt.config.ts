// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-quasar-ui'
    ],
    quasar: {
        plugins: [
            'BottomSheet',
            'Dialog',
            'Loading',
            'LoadingBar',
            'Notify',
            'Dark',
        ],
        extras: {
            fontIcons: ['material-icons']
        }
    }
})
