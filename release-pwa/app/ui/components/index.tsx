import { VComponent } from '../utils'
import VIcon from './icon/icon'
import VButton from './button/button'
import VInput from './input/input'
import VRadio from './radio/radio'
import VCheckbox from './checkbox/checkbox'
import VSwitch from './switch/switch'
import VCarousel from './carousel/carousel'
import VCarouselList from './carousel/list'
import VCarouselItem from './carousel/item'
import VProgress from './progress/progress'
import VCollapse from './collapse/collapse'
import VNavBarItem from './navbar/item'
import VNavBarBurger from './navbar/burger'
import VNavBarDropDown from './navbar/dropdown'
import VNavBar from './navbar/navbar'

const components: VComponent[] = [
    { name: 'v-icon', component: VIcon },
    { name: 'v-button', component: VButton },
    { name: 'v-input', component: VInput },
    { name: 'v-radio', component: VRadio },
    { name: 'v-checkbox', component: VCheckbox },
    { name: 'v-switch', component: VSwitch },
    { name: 'v-carousel', component: VCarousel },
    { name: 'v-carousel-list', component: VCarouselList },
    { name: 'v-carousel-item', component: VCarouselItem },
    { name: 'v-progress', component: VProgress },
    { name: 'v-collapse', component: VCollapse },
    { name: 'v-navbar-item', component: VNavBarItem },
    { name: 'v-navbar-burger', component: VNavBarBurger },
    { name: 'v-navbar-dropdown', component: VNavBarDropDown },
    { name: 'v-navbar', component: VNavBar }
]

export default components