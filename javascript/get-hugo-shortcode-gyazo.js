document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.altKey && event.code === "KeyX") {
        const url = window.location.href;
        const match = url.match(/\/(\w+)$/);

        if (match) {
            const gyazoID = match[1];
            const gyazoShortcode = `{{< gyazo ${gyazoID} >}}`;

            function copyToClipboard(text) {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = 0;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }

            copyToClipboard(gyazoShortcode);
            console.log("クリップボードにコピーしました:", gyazoShortcode);
        } else {
            console.log("IDが見つかりませんでした。");
        }
    }
});
