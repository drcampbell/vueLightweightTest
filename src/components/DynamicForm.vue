<template>
    <form name="dynamic">
        <div v-for="(group, key) in content.form.fields"
            v-bind:key="key">
            <section class="pan-form__header">
                <span>{{group.label || group.keyName}}</span>
            </section>
            <section class="pan-form__content">
                <div>
                    <form-object
                        v-for="(fobject, key) in group.fields"
                        :fobject="fobject"
                        :key="key">
                    </form-object>
                </div>
            </section>
        </div>
    </form>
</template>

<script>
import content from '@/data/static-form.json';
import FormObject from '@/components/FormObject';

export default {
  name: 'DynamicForm',
  data() {
    return {
      content,
    };
  },
  components: {
    FormObject,
  },
};
</script>
