import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import Card from '@/components/Card.vue'
import store from '../../src/store/index';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Card.vue', () => {
  it('should reset stock quantity after stocks buy event', async () => {

    const stockData = {
      id: 0,
      name: "BMW",
      price: 65
    };

    const wrapper = shallowMount(Card, {
      store,
      localVue,
      propsData: {
        stock: stockData
      },
      data() {
        return {
          quantity: 10
        }
      }
    });

    expect(wrapper.vm.$props.stock).toBe(stockData);
    wrapper.find('.btn-success').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.quantity).toBe(null);
  })
});
