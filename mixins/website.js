import { equals } from "ramda";
import { siteType } from "@/constant/website";
import { mapGetters } from 'vuex';

const computed = {
  ...mapGetters({ getWebsite: 'getWebsite' }),
  /* 崎崎網站 */
  isChiNav() {
    return equals(this.getWebsite, siteType.chi)
  },
  /* 十校聯展網站 */
  isSchoolNav() {
    return equals(this.getWebsite, siteType.school)
  },
}

export default {
  computed
}
