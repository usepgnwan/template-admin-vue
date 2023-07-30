export default {
    data() {
      return {
        msg: 'Hello World',
      }
    }, 
    methods: {
      displayMessage: function () {
        console.log('Now printing from a mixin function')
      },
    },
}