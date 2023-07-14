<template>
  <div class="card edit-field">
    <div class="card-body">
      <div class="mb-3">
        <label for="edit-post" class="form-label">编辑帖子</label>
        <textarea
          v-model="content"
          class="form-control"
          id="edit-post"
          rows="3"
        ></textarea>
        <button @click="submit" type="button" class="btn btn-primary btn-sm">
          发帖
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "UserProfileWrite",
  setup(props, context) {
    let content = ref("");
    const submit = () => {
      context.emit("submit", content.value);
      content.value = "";
    };
    return { content, submit };
  },
};
</script>

<style scope>
.edit-field {
  margin-top: 20px;
}
button {
  margin-bottom: 10px;
}
</style>
