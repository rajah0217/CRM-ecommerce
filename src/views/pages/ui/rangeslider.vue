<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Slider from "@/components/custom/Slider.vue";

/**
 * Range Slider component
 */
export default {
  components: { Layout, PageHeader, Slider },
  data() {
    return {
      title: "Range Slider",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Range Slider",
          active: true
        }
      ],

      simpleValue: 10,
      sliderCustomize: 300,
      sliderWithLabel: {
        value: 45,
        data: [15, 30, 45, 60, 75, 90, 120],
        range: [
          {
            label: "15 mins"
          },
          {
            label: "30 mins",
            isHide: true
          },
          {
            label: "45 mins"
          },
          {
            label: "1 hr",
            isHide: true
          },
          {
            label: "1 hr 15 mins"
          },
          {
            label: "1 hr 30 mins",
            isHide: true
          },
          {
            label: "2 hrs"
          }
        ],
        rangeValue: {}
      },
      customData: {
        value: 3,
        data: [1, 2, 3, 4, 5, 6, 7],
        range: [
          {
            label: "Sunday"
          },
          {
            label: "Monday"
          },
          {
            label: "Tuesday"
          },
          {
            label: "Wednesday"
          },
          {
            label: "Thursday"
          },
          {
            label: "Friday"
          },
          {
            label: "Saturday"
          }
        ]
      },
      loader: null,
      loadingValue: 0,
      customStyle: 800,
      lineHeight: 10
    };
  },
  methods: {
    /**
     * Range and label slider set range
     */
    callbackRange(val) {
      this.sliderWithLabel.rangeValue = val;
    },
    /**
     * Loading slider
     */
    startLoad() {
      this.loader = setInterval(() => {
        this.loadingValue++;
        if (this.loadingValue === 100) {
          clearInterval(this.loader);
        }
      }, 100);
    }
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Range slider</BCardTitle>
            <p class="card-title-desc">
              Cool, comfortable, responsive and easily customizable range slider
            </p>
            <BRow>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Default</h5>
                  <div class="px-3">
                    <Slider
                      v-model="simpleValue"
                      @input="simpleValue = $event"
                    />
                  </div>
                </div>
              </BCol>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Min-Max</h5>
                  <div class="px-3">
                    <Slider
                      v-model="sliderCustomize"
                      :min="100"
                      :max="500"
                      @input="sliderCustomize = $event"
                    />
                  </div>
                </div>
              </BCol>
            </BRow>
            <BRow>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Range and Label</h5>
                  <div class="px-3">
                    <Slider
                      v-model="sliderWithLabel.value"
                      :data="sliderWithLabel.data"
                      :range="sliderWithLabel.range"
                      @callbackRange="callbackRange"
                    />
                  </div>
                </div>
              </BCol>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Loading</h5>
                  <div class="px-3">
                    <Slider
                      v-model="loadingValue"
                      disabled
                      @input="loadingValue = $event"
                    />
                    <br />
                    <BButton size="sm" variant="light" @click="startLoad"
                      >Start</BButton
                    >
                  </div>
                </div>
              </BCol>
            </BRow>
            <BRow>
              <BCol md="6">
                <div class="p-3">
                  <h5 class="font-size-14 mb-3 mt-0">Custom Style</h5>
                  <div class="px-3">
                    <Slider
                      v-model="customStyle"
                      class="custom-slide-bar"
                      :min="100"
                      :max="1000"
                      @input="customStyle = $event"
                    />
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
<style scoped>
.custom-slide-bar {
  height: 10px;
}
</style>
