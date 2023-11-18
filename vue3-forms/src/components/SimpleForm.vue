<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'
import BaseCheckbox from './BaseCheckbox.vue'
import BaseRadioGroup from './BaseRadioGroup.vue'

const data = reactive({
  categories: [
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
  ],
  event: {
    category: '',
    title: 'aaa',
    description: 'aaaaa',
    location: '',
    pets: 1,
    extras: {
      catering: false,
      music: false
    }
  },
  petOptions: [
    {
      label: 'Yes',
      value: 1
    },
    {
      label: 'No',
      value: 0
    }
  ]
})
const sendForm = () => {
  axios
    .post('https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events', data.event)
    .then((res) => {
      console.log('Res', res)
    })
    .catch((err) => {
      console.log('Err', err)
    })
}
</script>

<template>
  <div>
    <h1>Create an data.event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect v-model="data.event.category" label="Category" :options="data.categories" />

      <fieldset>
        <legend>Name & describe your event</legend>
        <div>
          <BaseInput
            v-model="data.event.title"
            label="Title"
            type="text"
            error="this input has an error"
          />
        </div>
        <div>
          <BaseInput v-model="data.event.description" label="Description" type="text" />
        </div>
        <div>
          <BaseInput v-model="data.event.location" label="Location" type="text" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Pets</legend>
        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="data.event.pets"
            :options="data.petOptions"
            name="pets"
            vertical
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox v-model="data.event.extras.catering" label="Catering" type="checkbox" />
        </div>
        <div>
          <BaseCheckbox v-model="data.event.extras.music" label="Live music" type="checkbox" />
        </div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
    <pre>

      {{ data }}
    </pre>
  </div>
</template>

<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
