<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "DarkModeToggle",
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
  outline: 0;
  border: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eeeeee;
  --webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler::before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background: #717171;
  --webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: #1d1d1d;
}

input:focus + .toggler {
  box-shadow: 0 0 2px #1d1d1d;
}

input:checked + .toggler:before {
  --webkit-transform: translateX(30px);
  --ms-transform: translateX(30px);
  transform: translateX(30px);
}

.toggler.round {
  border-radius: 34px;
}

.toggler.round:before {
  border-radius: 50%;
}
</style>
