import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
    name: 'v-product'
})
export default class VProduct extends Vue {
    protected render (h: CreateElement) {
        return (
            <div class="v-product">
                Product Page
            </div>
        )
    }
}