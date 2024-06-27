<template>
  <div class="app-container">
    <header class="app-header">
      <router-link to="/login" class="nav-button">Login</router-link>
      <router-link to="/signup" class="nav-button">SignUp</router-link>
    </header>
    <div class="main-content">
      <h1 class="header">DingALingALing Dating Website</h1>
      <v-card class="options-card">
        <h1 class="option-card-header">Hatred deal breaker</h1>
        <v-container>
          <div class="text-center">
            <v-select
                v-model="location"
                :items="dislikes.map(dislike => dislike.title)"
                label="Select your dislikes"
            >
            </v-select>
          </div>
          <router-link to="/signup" class="next-button">Next</router-link>
        </v-container>
      </v-card>

    </div>
  </div>
</template>


<script>
export default {
  name: 'homepage',

  data: () => ({
    dislikes: [
      { title: 'Smoking' },
      { title: 'Drinking Alcohol' },
      { title: 'Drug Usage' },
      { title: 'Bad Hygiene' },
    ],
    // locations: [
    //   'top',
    //   'bottom',
    //   'start',
    //   'end',
    //   'center',
    // ],
    location: 'None selected'
  }),


}
</script>

<style scoped>

::v-deep .v-select-menu {
  background-color: #000000; /* Black background for dropdown */
}

::v-deep .v-select-list {
  color: white; /* White text for dropdown items */
}

::v-deep .v-input__control .v-input__slot {
  background-color: #ffffff; /* Background of select input */
  border-color: #000000; /* Border color */
}

::v-deep .v-input__append-inner {
  color: #000000; /* Color of dropdown icon */
}


.options-card {
  width: 33%; /* Adjust width as per your design needs */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  margin: auto; /* This will center the card horizontally */
  margin-bottom: 183px;
  background-color: #f8d2a9;
  padding: 20px;

  justify-content: flex-end;
  margin-left: 40px;
  color: #810046;
  border-radius: 8px;
}



.app-container {
  display: flex;
  flex-direction: column;
  background-color: #c35a5a;
  height: 100vh;
}

.app-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  width: 100%;
  background-color: #f8d2a9;
}

.nav-button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #cc537f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

.next-button {
  padding: 10px 20px;
  margin-left: 150px;
  background-color: #cc537f;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

.nav-button:hover {
  background-color: #ff5b5b;
}

.main-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.header {
  margin-bottom: 20px; /* More space above the card */
  color: #ffe9d1;
  margin-top: 20px;
}

.h1 { text-align: center; }
</style>

