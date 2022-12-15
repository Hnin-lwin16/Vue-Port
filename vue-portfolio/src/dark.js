export default ({
  
    data () {
    return {
          
     
          test: 'Test'
         
        }
  },
  methods: {
    changeDark: function () {
      this.$emit('changeDark',this.dark = !this.dark)
    },
    
  },
      //computed: {
      //  changeDark: function () {
      //    return {
      //      dark: this.dark
      //   }
      //  }
      //}
    }
)