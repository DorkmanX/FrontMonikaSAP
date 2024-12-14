<template>
  <div class="main_container">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <FilesDropContainer @newfileevent="updateLoadedFilesList"></FilesDropContainer>
    <FilesHistoryContainer :filesList="filesList"></FilesHistoryContainer>
    <button class="calculation_button" @click="startCalculations"> Oblicz </button>
    <div style="font-size: 30px;"> Wynik: {{ resultScore }} zł</div>
    <CalculationsHistory :historyTable="history"> </CalculationsHistory>
  </div>
</template>

<script>
export default {
  data() {
        return {
            filesList: [],
            history: [],
            resultScore: 0.0
        }
    },
    methods: {
      updateLoadedFilesList(fileName) {
        this.filesList.push(fileName.substr(0,fileName.indexOf('.')));
      },
      startCalculations() {
        let fileName = this.filesList[0];
        let url = `http://localhost:5240/api/processSelectedFile?filename=${fileName}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            this.history = data.history;
            this.resultScore = data.cost;
          });
      }
    }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}
.calculation_button {
  display: flex;
  background-color: rgb(129, 166, 180);
  font-size: 25px;
  margin: 1%;
  text-align: center;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .main_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
