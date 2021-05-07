import Vue from 'vue';
import { breakpoints } from '@/constant/breakpoint';

const isMobileWidth = (width) => width < breakpoints.large;
const isDesktopWidth = (width) => width >= breakpoints.large;
const isExtraSmallWidth = (width) => width < breakpoints.small;
const isSmallWidth = (width) => width < breakpoints.medium && width >= breakpoints.small;
const isMediumWidth = (width) => width < breakpoints.large && width >= breakpoints.medium;
const isLargeWidth = (width) => width < breakpoints.extraLarge && width >= breakpoints.large;
const isExtraLargeWidth = (width) => width >= breakpoints.extraLarge;

const state = Vue.observable({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobileSize: isMobileWidth(window.innerWidth),
  isDesktopSize: isDesktopWidth(window.innerWidth),
  isExtraSmallSize: isExtraSmallWidth(window.innerWidth),
  isSmallSize: isSmallWidth(window.innerWidth),
  isMediumSize: isMediumWidth(window.innerWidth),
  isLargeSize: isLargeWidth(window.innerWidth),
  isExtraLargeSize: isExtraLargeWidth(window.innerWidth),
});

Vue.prototype.$screen = state;

const mutations = {
  setWidth: (width) => {
    state.isMobileSize = isMobileWidth(width);
    state.isDesktopSize = isDesktopWidth(width);
    state.isExtraSmallSize = isExtraSmallWidth(width);
    state.isSmallSize = isSmallWidth(width);
    state.isMediumSize = isMediumWidth(width);
    state.isLargeSize = isLargeWidth(width);
    state.isExtraLargeSize = isExtraLargeWidth(width);
    state.width = width; // 放最後，因為上面相關state不是computed
  },
  setHeight: (value) => (state.height = value),
};

const updateState = () => {
  mutations.setWidth(window.innerWidth);
  mutations.setHeight(window.innerHeight);
};

window.addEventListener('resize', updateState);
