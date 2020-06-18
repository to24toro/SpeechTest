<template>
    <div>
        <button @click = "sendRequest">会話</button>
    </div>
</template>
<script>
export default {
  components: {
  },
  data(){
    return {
      host:'',
      accept:''
    };
  },
  methods: {

      async sendRequest(){
        let speech = new webkitSpeechRecognition();
        speech.lang = 'ja-JP';
        speech.start();
        console.log('start')
        speech.onresult = function(e) {
          console.log('stop')
          speech.stop();
          if(e.results[0].isFinal){
              var autotext =  e.results[0][0].transcript
              console.log(autotext)
              // content.innerHTML += '<div>'+ autotext +'</div>';
          }
        }
        speech.onend = () => {
        speech.start()
        };
        // let msg = await this.$axios.get('/test')
        // console.log(msg.data)
      }
        //
        // sendRequest().catch(console.error);
  },
  // async asyncData({app}){
  //   const response = await app.$axios.$get('https://httpbin.org/get');
  //   return {host:response.headers.Host};
  // }
}
</script>
