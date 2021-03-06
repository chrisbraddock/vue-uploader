<style scoped lang="scss">
.upload-file{
	.inputfile {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;

		&+ label {
			cursor: pointer;
		}

		&:focus + label, & + label:hover{
			color: #30343b;
		}
	}

	//Fade
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
}

</style>

<template>
	<div class="upload-file" :class="{'upload-file-dragdrop': isDragDrop, 'is-dragover': isDragOver}" :id="`upload-file${itemIndex}`">
		<input type="file" name="uploadFile" class="inputfile" :id="`uploadFile${itemIndex}`" :accept="acceptedFormats.join(',')" @change="changed($event)">
		<label :for="`uploadFile${itemIndex}`" v-show='!file'>
			<template v-if="!isDragOver"><div v-html="message"></div></template>
			<template v-else><div v-html="dragOverMessage"></div></template>
		</label>
		<transition name="fade">
			<div :id="`upload-file-preview-container${itemIndex}`" class="upload-file-preview-container" v-show="file">

			</div>
		</transition>
		<button v-if="showButton" v-show="file" type="button" class="button" :class="buttonClass" @click="send()">{{buttonTitle}}</button>
	</div>
</template>

<script type="text/babel">

export default {
	name: "UploadFile",

	data(){
		return {
			file: false,
			isDragOver: false,
			filedetailsTemplate: `
			<div class="upload-file-details">
			<div class="upload-file-thumbnail"></div>
			<div class="upload-file-details-body">
			<span class="upload-file-filename"></span>
			<button type="button" class="upload-file-remove-file">${this.cancelButton}</button>
			</div>
			</div>
			<div class="upload-file-message">${this.uploadedMessage}</div>`
		}
	},

	props: {
		message: {
			type: String,
			required: false,
			default: "Choose a file..."
		},
		dragOverMessage: {
			type: String,
			required: false,
			default: "Drag it here"
		},
		uploadedMessage: {
			type: String,
			required: false,
			default: ""
		},
		showButton: {
			type: Boolean,
			required: false,
			default: false
		},
		cancelButton: {
			type: String,
			required: false,
			default: "Cancel"
		},
		buttonTitle: {
			type: String,
			required: false,
			default: "Send"
		},
		buttonClass: {
			type: Array,
			required: false,
			default() {
				return []
			}
		},
		itemIndex: {
			type: String,
			required: false,
			default: "0"
		},
		isDragDrop:{
			type: Boolean,
			required: false,
			default: false
		},
		acceptedFormats: {
			type: Array,
			required: false,
			default() {
				return []
			}
		}
	},

	computed: {
		isAdvancedUpload(){
			var div = document.createElement("div")
			return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window
		}
	},

	mounted(){
		if (this.isDragDrop && this.isAdvancedUpload) {
			//Active dragdrop
			var $uploadBox = document.getElementById(`upload-file${this.itemIndex}`)
			$uploadBox.addEventListener('dragover', this.dragOver, false)
			$uploadBox.addEventListener('dragenter', this.dragEnter, false)
			$uploadBox.addEventListener('dragleave', this.dragLeave, false)
			$uploadBox.addEventListener('drop', this.drop, false)
		}
	},

	methods: {
		changed(e){
			e.preventDefault()
			this.addFile(false, e)
		},
		changeLabel(e){
			var label = e.target.nextElementSibling
			var fileName = '';
			fileName = e.target.value.split( '\\' ).pop();
			if( fileName ){
				label.innerHTML = fileName;
			}
			else{
				label.innerHTML = labelVal;
			}
		},
		send(){
			this.$emit("send-file", this.file)
		},
		dragOver(e){
			e.preventDefault()
			this.isDragOver = true
		},
		dragEnter(e){
			this.isDragOver = true
		},
		dragLeave(e){
			this.isDragOver = false
		},
		drop(e){
			e.preventDefault()
			this.isDragOver = false
			this.addFile(true, e)
		},
		addFile(drop, e){
			this.file = (drop) ? e.dataTransfer.files[0] : e.target.files[0]
			if (this.acceptedFormats.length > 0) {
				if (this.acceptedFormats.indexOf(this.file.type) > -1) {
					this.addFileThumbnail()
					this.$emit('selected-file', this.file)
				}else{
					this.file = null
				}
			}else{
				this.addFileThumbnail()
				this.$emit('selected-file', this.file)
			}
		},
		addFileThumbnail(){
			let previewContainer = this.getEmptyPreviewContainer()

			let thumbnailTemplate = document.createElement('div')

			let arrFileName = this.file.name.split(".")
			let fileExtension = arrFileName[arrFileName.length - 1]

			thumbnailTemplate.innerHTML = this.filedetailsTemplate
			thumbnailTemplate.classList.add("upload-file-preview")

			thumbnailTemplate.querySelector('.upload-file-filename').innerHTML = `${this.file.name.substring(0, 24)}`
			thumbnailTemplate.querySelector('.upload-file-thumbnail').classList.add(`upload-file-${fileExtension.toLowerCase()}`)
			thumbnailTemplate.querySelector(".upload-file-remove-file").addEventListener("click", this.removeFile)

			previewContainer.appendChild(thumbnailTemplate)
		},
		removeFile(e){
			this.getEmptyPreviewContainer()
			let fileInput = document.getElementById(`uploadFile${this.itemIndex}`)
			fileInput.value = ''
			this.$emit('remove-file', this.file)
			this.file = false
		},
		getEmptyPreviewContainer(){
			let previewContainer = document.getElementById(`upload-file-preview-container${this.itemIndex}`)
			previewContainer.innerHTML = ''
			return previewContainer
		}
	}
}
</script>
