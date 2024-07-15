<template>
  <v-container>
    <v-row>
      <v-col
          v-for="(imageUrl, index) in imageUrls"
          :key="index"
          cols="12"
          md="4"
      >
        <v-img :src="imageUrl" :alt="'Image ' + (index + 1)"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrls: []
    };
  },
  mounted() {
    this.fetchImages('username'); // Replace 'username' with the actual username
  },
  methods: {
    async fetchImages(username) {
      try {
        const response = await fetch(`/getimages/${username}`);
        if (response.ok) {
          const imagesBytes = await response.json();
          this.convertToImageUrls(imagesBytes);
        } else {
          console.error('Failed to fetch images:', response.status);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    convertToImageUrls(imagesBytes) {
      imagesBytes.forEach((imageBytes) => {
        const uint8Array = new Uint8Array(imageBytes);
        const blob = new Blob([uint8Array], { type: 'image/jpeg' }); // Adjust MIME type if needed
        const imageUrl = URL.createObjectURL(blob);
        this.imageUrls.push(imageUrl);
      });
    }
  }
};
</script>
