<script>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
const {graph} = useProfile()
export default {
  data(){
    return {
      grid3:storeToRefs(useAuthStore()),
      Tower_1:0,
      Tower_2:0,
      suma:0,
      optionsProfileVisit: {
        dataLabels: { enabled:true },
        chart: { toolbar: { show: false }, type: 'bar',stacked: true, },
        series: [{ name: 'Grid',data: [] },{ name: 'Solar',data: [] }],
        colors: ['#004062','#FDC015'],
        xaxis: { categories: ["Tower 3","Tower 132"],},
      }
    }
  },
  computed:{
    graph_api(){
      return this.optionsProfileVisit.series
    }
  },
  methods:{
    async grafica() {
      const datosMes = await graph()
      if (datosMes[0]._rawValue === null) {return this.optionsProfileVisit.series} else {
        datosMes[0]._rawValue.grid.map((valor) => {this.suma += valor.value})
        this.optionsProfileVisit.series[0].data.push(this.suma)
        this.Tower_1 = this.suma
        this.suma = 0

        datosMes[1]._rawValue.grid.map((valor) => {this.suma += valor.value/1000})
        this.optionsProfileVisit.series[0].data.push(this.suma)
        this.Tower_2 += this.suma
        this.suma = 0

        datosMes[0]._rawValue.generation.map((valor) => {this.suma += valor.value})
        this.optionsProfileVisit.series[1].data.push(this.suma)
        this.Tower_1 += this.suma
        this.suma = 0

        datosMes[1]._rawValue.generation.map((valor) => {this.suma += valor.value/1000})
        this.optionsProfileVisit.series[1].data.push(this.suma)
        this.Tower_2 += this.suma
        this.suma = 0

      }
    }
  },
  mounted(){
    this.grafica()
  }
}
</script>
<template>
  <div>
    <div class="page-heading">
        <h3>Energy Monitoring System</h3>
    </div>
    <div class="page-content">
        <section class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-6 col-lg-6 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-3">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="stats-icon">
                                          <span class="badge badge-pill badge-danger">
                                            <i class="bi bi-building"></i><!---->
                                          </span>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">Tower 3</h6>
                                        <h6 class="font-extrabold mb-0">{{ Tower_1  }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-6 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-3">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="stats-icon">
                                          <span class="badge badge-pill badge-danger">
                                            <i class="bi bi-building"></i>
                                          </span>                                            
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">Tower 132</h6>
                                        <h6 class="font-extrabold mb-0">{{ Tower_2 }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <CardHeader></CardHeader>
                            <div class="card-body">
                              <client-only>
                                <apexchart height="200" :options="optionsProfileVisit" :series="graph_api"> </apexchart>
                              </client-only>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

