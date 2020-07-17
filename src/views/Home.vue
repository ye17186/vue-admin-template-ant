<template>
  <div>
    <div class="i-home-statistic" style="width: 100%; padding: 5px 10px;">
      <a-row :gutter="16">
        <a-col :span="6">
          <a-card>
            <a-statistic-countdown
              title="Countdown"
              :value="deadline"
              style="margin-right: 50px"
            />
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic title="订单量" :value="32981"
                         :value-style="{ color: '#cf1322' }" >
              <template slot="suffix"><a-icon type="arrow-up" />11.20%</template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic title="退货量" :value="15"
                         :value-style="{ color: '#3f8600' }" >
              <template slot="suffix"><a-icon type="arrow-down" />10.87%</template>
            </a-statistic>
          </a-card>
        </a-col>
        <a-col :span="6">
          <a-card>
            <a-statistic title="销售额" :value="219471"
                         :value-style="{ color: '#cf1322' }">
              <template slot="suffix"><a-icon type="arrow-up" />14.57%</template>
            </a-statistic>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
    }
  }
}
</script>

<style scoped>

</style>
