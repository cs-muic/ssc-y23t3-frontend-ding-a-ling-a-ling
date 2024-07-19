<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import apiClient from "@/axiosConfig";
import { gsap } from "gsap";

// apiClient.get('/user/matches').then(response => {
//   console.log(response.data)
// })

// apiClient.get('/user/matches').then(response => {
//   console.log(response.data)
// })

//
// const displayName = "Austin";
// const biography = " is a booyahh";
// const age = 22;
// const contacts = "Im in your walls come find me";
// const imgSrc = "https://i.ytimg.com/vi/P9XSpiWZztY/maxresdefault.jpg";
// const dislikes = ["and your mom", "you"];


export default {
  setup() {
    const counter = ref(0);
    const token = localStorage.getItem("token");
    const maxCount = ref(0);

    const biography = ref('');
    const displayName = ref('');
    const age = ref(0);
    const contacts = ref('');
    const dislikes = ref([]);
    const username = ref('');
    const imgSrc = ref('');
    const profileData = ref({
      displayName: '',
      profilePicture: '',
      contact: '',
      biography: '',
      base64Image: '', // Added field for base64 image
    });

    // Fetch maxCount initially
    apiClient.get('/user/matches/amount', { params: { token: token } })
      .then((response) => {
        maxCount.value = parseInt(response.data, 10); // Ensure it's an integer
      })
      .catch((error) => {
        console.error("Failed to retrieve maxCount:", error);
      });

    function incrementCounter() {
      if (maxCount.value > 0) {
        counter.value = (counter.value + 1) % maxCount.value;
        updateUserByGetRequest();
        console.log(counter.value);
      }
    }

    function decrementCounter() {
      if (maxCount.value > 0) {
        counter.value = (counter.value - 1 + maxCount.value) % maxCount.value;
        updateUserByGetRequest();
        console.log(counter.value);
      }
    }

    function updateUserByGetRequest() {
      apiClient.get("/user/matchebyindex", { params: { token: token, index: counter.value } })
        .then((response) => {
          const data = response.data;
          displayName.value = data.displayName;
          biography.value = data.biography;
          age.value = data.age;
          contacts.value = data.contacts;
          dislikes.value = data.dislikes;
          username.value = data.username;
          console.log("Username:", username.value);
          loadImage();
        })
        .catch((error) => {
          console.error("Failed to update user by index:", error);
        });
    }
    const loadImage = async () => {
      try {
        const response = await apiClient.get('/user/images', {
          params: { username: username.value }
        });
        console.log('Image response:', response.data);
        profileData.value.base64Image = response.data;
        imgSrc.value = profileData.value.base64Image;
      } catch (error) {
        console.error('Failed to load image:', error.response ? error.response.data : error);
        alert(`Failed to load image: ${error.response ? error.response.data.message : 'Network or server error'}`);
      }
    };

    return {
      counter,
      incrementCounter,
      decrementCounter,
      loadImage,
      displayName,
      biography,
      age,
      contacts,
      imgSrc,
      dislikes,
      profileData
    };
  },
  mounted() {
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");

    let arrowLeft = document.querySelector(".arrowLeft");
    let arrowRight = document.querySelector(".arrowRight");

    let triggerLeft = document.querySelector(".triggerLeft");
    let triggerRight = document.querySelector(".triggerRight");

    let mouseX;
    let mouseY;

    triggerLeft.addEventListener("click", this.decrementCounter);
    triggerRight.addEventListener("click", this.incrementCounter);

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, 0.5, { x: mouseX, y: mouseY });
      gsap.to(cursor2, 0.2, { x: mouseX, y: mouseY });
    });

    triggerLeft.addEventListener("mouseenter", (e) => {
      gsap.to(arrowLeft, 1, {
        transform: "scaleX(-1)",
        scale: 1,
        opacity: 1,
        top: "-75px",
        left: "-75px",
        rotate: 0,
        ease: "elastic.in",
      });
    });

    triggerLeft.addEventListener("mousemove", (e) => {
      gsap.to(arrowLeft, 1, {
        x: mouseX,
        y: mouseY,
      });
    });

    triggerLeft.addEventListener("mouseleave", (e) => {
      gsap.to(arrowLeft, 0.2, {
        scale: 0,
        opacity: 0,
        top: "10",
        left: "40",
        rotate: 45,
      });
    });

    triggerRight.addEventListener("mouseenter", (e) => {
      gsap.to(arrowRight, 1, {
        scale: 1,
        opacity: 1,
        top: "-75px",
        left: "-75px",
        rotate: 0,
        ease: "bounce.in",
      });
    });

    triggerRight.addEventListener("mousemove", (e) => {
      gsap.to(arrowRight, 1, {
        x: mouseX,
        y: mouseY,
      });
    });

    triggerRight.addEventListener("mouseleave", (e) => {
      gsap.to(arrowRight, 0.2, {
        scale: 0,
        opacity: 0,
        top: "10",
        left: "40",
        rotate: 45,
        ease: "bounce.in",
      });
    });
  },
  beforeUnmount() {
    // Clean up event listeners when component is destroyed
    let triggerLeft = document.querySelector(".triggerLeft");
    let triggerRight = document.querySelector(".triggerRight");

    triggerLeft.removeEventListener("click", this.decrementCounter);
    triggerRight.removeEventListener("click", this.incrementCounter);
  },
  // return { displayName, biography, age, contacts, imgSrc, dislikes };
};
</script>

<style scoped>
.triggerLeft,
.triggerRight {
  width: 35%;
  top: 10%;
  height: 90%;
  position: fixed;
  /* background: rgba(0, 0, 0, 0.233); */
  position: absolute;
  z-index: 50;
}

.triggerLeft {
  left: 0;
}

.triggerRight {
  right: 0;
}

.content {
  padding-top: 70px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 55px;
  height: 100vh;
}

body {
  margin: 0;
  height: 100vh;
  display: grid;
  place-content: center;
  font-family: "Bebas Neue";
}

h1 {
  font-size: 13em;
  cursor: pointer;
  line-height: 0;
}

.cursor,
.cursor2,
.arrowLeft,
.arrowRight {
  position: fixed;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  /* transition: transform .1s; */
}

.cursor {
  background: rgba(255, 214, 214, 0);
  top: 0;
  width: 40px;
  height: 40px;
  z-index: 10;
  /* border-radius: 1px; */
  border-style: solid;
  backdrop-filter: blur(10px);
  border-width: 1px;
  border-color: rgba(256, 256, 256, 1);
}

.cursor2 {
  background: rgba(255, 214, 214, 0);
  top: -8px;
  left: -8px;
  width: 16px;
  height: 16px;
  z-index: 11;
  /* border-radius: 1px; */
  border-style: solid;
  backdrop-filter: blur(10px);
  border-width: 1px;
  /* transition: transform .05s; */
}

.arrowLeft,
.arrowRight {
  background: rgba(255, 214, 214, 0);
  top: 0;
  width: 150px;
  height: 150px;
  z-index: 10;
  opacity: 0;
  /* border-radius: 1px; */
  /* border-style: solid; */
  /* backdrop-filter: blur(10px); */
  /* border-width: 1px; */
  /* border-color: rgba(256, 256, 256, 1); */

  svg {
    width: 80px;
  }
}

.arrowLeft,
.arrowRight {
  scale: 0;
}

.arrowLeft,
.arrowRight {
  position: fixed;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.1s;
  z-index: 12;
}
</style>

<script setup></script>

<template>
  <div class="arrowRight">
    <svg width="62" height="45" viewBox="0 0 62 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M41.3333 39.2727V36.8182C42.16 36.8182 43.8133 36 44.64 35.1818C45.4667 34.3636 46.2933 32.7273 46.2933 30.6818C46.2933 29.8636 46.2933 29.0455 45.88 28.2273C46.7067 27.8182 47.12 27.4091 47.9467 27C48.7733 26.1818 49.6 24.9545 49.6 22.5C49.6 21.6818 49.6 20.8636 49.1867 20.4545H56.2133C58.6933 20.4545 62 18.8182 62 14.7273C62 13.0909 61.1733 11.4545 60.3467 10.2273C57.8667 8.18182 54.56 8.18182 54.56 8.18182H36.7867C36.3733 5.72727 35.5467 3.68182 34.3067 2.45454C31.4133 0 27.6933 3.4328e-07 22.7333 1.2647e-07L19.84 0C14.0533 -2.5295e-07 11.16 2.86363 8.26667 5.72727L6.61334 6.95454C1.65334 12.2727 4.82813e-07 16.7727 0 27.8182C-5.18576e-07 39.6818 6.61333 45 21.08 45H31.4133C34.3067 45 40.0933 44.1818 41.3333 39.2727ZM31.4133 40.9091H20.6667C6.61333 40.9091 3.72 35.5909 3.72 27.8182C3.72 18 4.96 14.3182 9.09333 10.2273L10.7467 8.59091C14.0533 5.72727 15.7067 4.09091 19.84 4.09091H22.7333C26.8667 4.09091 29.76 4.09091 31.4133 5.31818C31.8267 5.72727 32.24 6.95454 32.24 8.18182H30.1733L23.9733 6.95454C23.56 6.95454 23.56 6.95455 23.1467 7.36364C22.7333 7.77273 23.1467 8.18182 23.1467 8.18182L28.1067 12.2727H54.56C54.9733 12.2727 56.6267 12.2727 57.4533 13.0909C57.4533 13.5 57.8667 13.9091 57.8667 14.7273C57.8667 15.9545 56.6267 16.3636 56.2133 16.3636H38.44C37.2 16.3636 35.96 17.1818 35.96 18.4091C35.96 19.6364 37.2 20.4545 38.0267 20.4545H43.4C43.8133 20.4545 45.4667 20.8636 45.4667 22.5C45.4667 23.7273 45.0533 24.5455 43.8133 24.5455H38.44C37.2 24.5455 35.96 25.3636 35.96 26.5909C35.96 27.8182 37.2 28.6364 38.0267 28.6364H40.92C41.3333 28.6364 42.16 29.0455 42.16 30.6818C42.16 31.5 41.7467 31.9091 41.7467 31.9091C41.3333 32.7273 40.0933 32.7273 40.0933 32.7273H36.7867C35.5467 32.7273 34.72 33.5455 34.72 34.3636C34.72 35.5909 35.1333 36.4091 36.3733 36.4091C36.7867 36.4091 37.2 36.8182 37.6133 37.2273V38.0455C36.7867 40.5 32.6533 40.9091 31.4133 40.9091C31.8267 40.9091 31.8267 40.9091 31.4133 40.9091Z"
        fill="white" />
    </svg>

  </div>

  <div class="arrowLeft">
    <svg width="62" height="45" viewBox="0 0 62 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.6667 39.2727V36.8182C19.84 36.8182 18.1867 36 17.36 35.1818C16.5333 34.3636 15.7067 32.7273 15.7067 30.6818C15.7067 29.8636 15.7067 29.0455 16.12 28.2273C15.2933 27.8182 14.88 27.4091 14.0533 27C13.2267 26.1818 12.4 24.9545 12.4 22.5C12.4 21.6818 12.4 20.8636 12.8133 20.4545H5.7867C3.3067 20.4545 0 18.8182 0 14.7273C0 13.0909 0.826701 11.4545 1.6533 10.2273C4.1333 8.18182 7.44 8.18182 7.44 8.18182H25.2133C25.6267 5.72727 26.4533 3.68182 27.6933 2.45454C30.5867 0 34.3067 3.4328e-07 39.2667 1.2647e-07L42.16 0C47.9467 -2.5295e-07 50.84 2.86363 53.7333 5.72727L55.3867 6.95454C60.3467 12.2727 62 16.7727 62 27.8182C62 39.6818 55.3867 45 40.92 45H30.5867C27.6933 45 21.9067 44.1818 20.6667 39.2727ZM30.5867 40.9091H41.3333C55.3867 40.9091 58.28 35.5909 58.28 27.8182C58.28 18 57.04 14.3182 52.9067 10.2273L51.2533 8.59091C47.9467 5.72727 46.2933 4.09091 42.16 4.09091H39.2667C35.1333 4.09091 32.24 4.09091 30.5867 5.31818C30.1733 5.72727 29.76 6.95454 29.76 8.18182H31.8267L38.0267 6.95454C38.44 6.95454 38.44 6.95455 38.8533 7.36364C39.2667 7.77273 38.8533 8.18182 38.8533 8.18182L33.8933 12.2727H7.44C7.0267 12.2727 5.3733 12.2727 4.5467 13.0909C4.5467 13.5 4.1333 13.9091 4.1333 14.7273C4.1333 15.9545 5.3733 16.3636 5.7867 16.3636H23.56C24.8 16.3636 26.04 17.1818 26.04 18.4091C26.04 19.6364 24.8 20.4545 23.9733 20.4545H18.6C18.1867 20.4545 16.5333 20.8636 16.5333 22.5C16.5333 23.7273 16.9467 24.5455 18.1867 24.5455H23.56C24.8 24.5455 26.04 25.3636 26.04 26.5909C26.04 27.8182 24.8 28.6364 23.9733 28.6364H21.08C20.6667 28.6364 19.84 29.0455 19.84 30.6818C19.84 31.5 20.2533 31.9091 20.2533 31.9091C20.6667 32.7273 21.9067 32.7273 21.9067 32.7273H25.2133C26.4533 32.7273 27.28 33.5455 27.28 34.3636C27.28 35.5909 26.8667 36.4091 25.6267 36.4091C25.2133 36.4091 24.8 36.8182 24.3867 37.2273V38.0455C25.2133 40.5 29.3467 40.9091 30.5867 40.9091C30.1733 40.9091 30.1733 40.9091 30.5867 40.9091Z"
        fill="white" />
    </svg>

  </div>

  <div class="cursor"></div>
  <div class="cursor2"></div>
  <div class="content d-flex h-100 w-100 justify-center align-center px-12">
    <div class="triggerLeft"></div>

    <UserMatchCard v-bind:displayName="displayName" v-bind:biography="biography" v-bind:age="age"
                   v-bind:contacts="contacts" v-bind:imgSrc="imgSrc" v-bind:dislikes="dislikes" />

    <div class="triggerRight"></div>
  </div>
</template>
