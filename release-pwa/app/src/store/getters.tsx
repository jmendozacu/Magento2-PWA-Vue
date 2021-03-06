import { GetterTree } from 'vuex'
import { StoreConfig } from '@helper/interface'

const getters: GetterTree<any, any> = {
    logoStore: (state) => {
        const config: StoreConfig = state.storeConfig
        
        if (config) {
            return {
                url: `${config.base_media_url}logo/${config.header_logo_src}`,
                href: config.base_url,
                title: config.logo_alt
            }
        }
    },
    cmsContent: (state) => {
        const cmsPage: any = state.cmsPage
        
        if (cmsPage) {
            return cmsPage.content
        }
    }
}

export default getters