import Vue from 'vue';
import NonogramContainer from '@/components/nonogram-container';

describe('nonogram-container.vue', () => {
  it('renders an input on start', () => {
    const Constructor = Vue.extend(NonogramContainer);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelectorAll('input').length)
      .toEqual(1);
  });
});
