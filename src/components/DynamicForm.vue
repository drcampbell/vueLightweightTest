<template>
<div>
    <button v-on:click="increment()">click me b</button>
    <form name="dynamic">
        <div v-for="(group, key) in content.form.fields"
            v-bind:key="key">
            <section class="pan-form__header">
                <span>{{group.label || group.keyName}}</span>
            </section>
            <section class="pan-form__content">
                <div>
                    <form-object :fobject="group"></form-object>
                </div>
            </section>
        </div>
    </form>
    </div>
</template>

<script>
import content from '@/data/static-form.json';
import FormObject from '@/components/FormObject';

export default {
  name: 'DynamicForm',
  data() {
    this.$store.commit('storeForm', {
      name: 'CaseDraftForm',
      formData: content,
    });
    return {
      content,
    };
  },
  components: {
    FormObject,
  },
  methods: {
    increment(event) {
      console.log(event);
      return this.$store.commit('increment');
    },
  },
};
</script>

<style>
.pan-form__header {
    background-color: white;
    color: black;
    font-weight: bolder;
    font-size: 1.2em;
    display: block;
    letter-spacing: 2px;
    border-top: 3px solid green;
    margin: 0px 16px;
    padding: 8px 0px;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
}

.pan-form__content {
    padding: 0em 1em;
    background-color: white;
    display: block;
    margin-bottom: 1em;
}</style>
