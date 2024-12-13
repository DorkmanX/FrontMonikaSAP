<template>
    <div class="file_drop_main_container">
        <div class="name_container"><p>{{ "Wybrany plik" }}: {{ selectedFileName }}</p></div>
        <div v-if="!selectedFile" id="file-drop-container">
            <form enctype="multipart/form-data">
                <input type="file" ref="fileInput" class="hidden" @change="selectFile" multiple/>
            </form>
            <div class="drop-area"
                 @click="openFileDialog"
                 @dragenter="dragEnter"
                 @dragleave="dragLeave"
                 @dragover="dragOver"
                 @drop="drop">
                <p> {{ "Przenieś plik i upuść lub naciśnij aby wybrać z dysku" }}</p>
            </div>
        </div>
        <div v-else style="display: flex;flex-direction: row;">
            <button class="add_button" @click="emitAddedFileSingnal"><p>Dodaj plik</p></button>
            <button class="clear_button" @click="clearSelectedFile"><p>Wyczyść plik</p></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FileDropContainer',
    data() {
        return {
            isDragging: false,
            selectedFile: null,
            selectedFileName: "Brak wbranego pliku",
            noSelectedFileString: "Brak wbranego pliku"
        }
    },
    methods: {
        getFile() {
            return this.selectedFile;
        },
        openFileDialog() {
            this.$refs.fileInput.click();
        },
        selectFile(e) {
            this.selectedFile = e.target.files[0]
            this.selectedFileName = this.selectedFile.name;
        },
        dragEnter(e) {
            e.preventDefault();
            this.isDragging = true;
        },
        dragLeave(e) {
            e.preventDefault();
            this.isDragging = false;
        },
        dragOver(e) {
            e.preventDefault();
        },
        drop(e) {
            this.$refs.fileInput.files;
            e.preventDefault()
            this.isDragging = false;
            this.selectedFile = e.dataTransfer.files[0];
            this.selectedFileName = this.selectedFile.name;
        },
        clearSelectedFile() {
            this.selectedFile = null;
            this.selectedFileName = "Brak wbranego pliku";
        },
        emitAddedFileSingnal() {
            this.$emit("newfileevent",this.selectedFileName);
            this.selectedFileName = this.noSelectedFileString;
            this.selectedFile = null;
        }
    }
}
</script>

<style>
p {
    font: 20px black bold;
}
.file_drop_main_container {
    display: flex;
}
#file-drop-container {
    display: flex;
    width: 25rem;
    height: 10rem;
    border: 2px dashed var(--bg_light_2);
    border-radius: 0.5rem;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.drop-area {
    display: flex;
    text-align: center;
    background-color: #282828;
    height: 75%;
    align-items: center;
    cursor: pointer;
}
.name_container {
    display: flex;
    text-align: center; 
    align-items: center;
    margin-bottom: 0.5rem;
    margin: 1%;
}
.hidden {
    display: none;
}

.clear_button {
    display: flex;
    background-color: #bf3226;
    margin: 1%;
}
.add_button {
    display: flex;
    background-color: #488e2a;
    margin: 1%;
}
</style>
  