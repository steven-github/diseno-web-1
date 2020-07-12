(function () {
	function $id(id) {
		return document.getElementById(id);
	}

	function OutPut(msg) {
		var m = $id("messages");
		m.innerHTML = msg + m.innerHTML;
	}

	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.classNamme = e.type == "dragover" ? "hover" : "";
	}

	function FileSelectedHandler(e) {
		FileDragHover();
		var files = e.target.files || e.dataTransfer.files;
		for (let i = 0, f; (f = files[i]); i++) {
			ParseFile(f);
		}
	}

	function ParseFile(file) {
		OutPut(
			"<p>File infomation:<strong>" +
				file.name +
				"</strong> Type: <strong>" +
				file.type +
				"</strong> Size: <strong>" +
				file.size +
				"</strong> Bytes</p>"
		);
	}

	function Init() {
		var fileSelect = $id("fileselect"),
			fileDrag = $id("filedrag"),
			submitButton = $id("submitbutton");

		fileSelect.addEventListener("change", FileSelectedHandler, false);
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {
			fileDrag.addEventListener("dragover", FileSelectedHandler, false);
			fileDrag.addEventListener("dragleave", FileSelectedHandler, false);
			fileDrag.addEventListener("drop", FileSelectedHandler, false);
			fileDrag.style.display = "block";

			submitButton.style.display = "none";
		}
	}

	if (window.File && window.FileList && window.FileReader) {
		Init();
	}
})();
