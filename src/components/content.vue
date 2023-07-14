<template>
  <div class="home">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ContentBase",
};
</script>
<style>
.container {
  padding-top: 30px;
}
</style>
