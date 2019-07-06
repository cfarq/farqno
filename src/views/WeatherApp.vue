<template>
  <div>{{ this.weather }}</div>
</template>

<script>
  export default {
    name: "Weather",
    data () {
      return {
        location: {},
        latitude: '',
        longitude: '',
        weather: '',
        api: 'b110f43c37503cc6414a878cdbaf0849',
        gmapKey: 'AIzaSyDaQQVIUeOEFTVGgsVGfMbvcS0Ny6kuPoI'
      }
    },
    mounted () {
      this.getGeoLocation()
    },
    methods: {
      getGeoLocation () {
        let that = this;
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(

            function success(position) {
              // for when getting location is a success
              that.latitude = position.coords.latitude
              that.longitude = position.coords.longitude

              that.setCity()

              console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude)
            },
            function error(error_message) {
              // for when getting location results in an error
              // trigger modal or some UI event to tell them to enable location data tings
            }
          )
        }
      },
      setCity () {
        return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.latitude+','+this.longitude+'&result_type=locality&key='+this.gmapKey+'').then((response) => {
          this.location = response.data
          this.getWeather()
        })
      },
      getWeather () {
        return axios.get('https://api.darksky.net/forecast/'+this.api+'/'+this.latitude+','+this.longitude+'').then((response) => {
          this.weather = response.data
          console.log(this.weather)
        })
      }
    }
  }
</script>

