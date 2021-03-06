import Vue from 'vue';

Vue.component('BaseInput', () =>
  import('@/components/BaseInput/BaseInput.vue')
);

Vue.component('BaseButton', () =>
  import('@/components/BaseButton/BaseButton.vue')
);

Vue.component('WelcomeMessage', () =>
  import('@/components/WelcomeMessage/WelcomeMessage.vue')
);

Vue.component('Joke', () => import('@/components/Joke/Joke.vue'));
