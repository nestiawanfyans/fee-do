<template>
  <div class="row mt-4">
    <div class="col-xl-3 col-md-6 mb-4">
      <div class="card border-primary border-3 border-top-0 border-end-0 border-bottom-0 shadow-sm h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                {{ this.title }}
              </div>
              <div class="h5 mb-0 text-gray-800">{{
                  new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR'
                  }).format(this.value)
                }}
              </div>
            </div>
            <div class="col-auto">
              <IconTooling/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconTooling from "@/components/icons/IconTooling.vue";

export default {
  components: {IconTooling},
  props: ["title", "value"],
}
</script>