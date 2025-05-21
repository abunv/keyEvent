const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="key">
        ${e.key == " " ? "space" : e.key}
        <smal>event.key</smal>
    </div>
    <div class="key">
        ${e.keyCode}
        <smal>event.keyCode</smal>
    </div>
    <div class="key">
        ${e.code}
        <smal>event.code</smal>
    </div>
    `;

  //   console.log("event.key", e.key);
  //   console.log("event.keyCode", e.keyCode);
  //   console.log("event.code", e.code);
});
