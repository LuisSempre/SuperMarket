<template>
  <v-carousel cycle widht= "600" height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://images.unsplash.com/photo-1612171371994-64b72aa6b5e7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fHhqUFI0aGxrQkdBfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1517721488698-bacb2d6085b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1473552486657-64356a22e365?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
        },
      ],
    };
  },
};
</script>