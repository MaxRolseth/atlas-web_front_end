function changeMode ({fontSize, fontWeight, textTransform, backgroundColor, color}) {
  return () => {
  
      document.body.style.fontSize = fontSize + "px";
      document.body.style.fontWeight = fontWeight;
      document.body.style.textTransform = textTransform;
      document.body.style.backgroundColor = backgroundColor;
      document.body.style.color = color;
  };
  }

  function main () {
    const spoopy = changeMode(
      {
        fontSize: 9,
        fontWeight: "bold",
        textTransform: "uppercase",
        backgroundColor: "pink",
        color: "green"
    });
    const darkMode = changeMode(
      {
        fontSize: 12,
        fontWeight: "bold",
        textTransform: "capitalize",
        backgroundColor: "black",
        color: "white"
    });

    const screamMode = changeMode(
      {
        fontSize: 12,
        fontWeight: "normal",
        textTransform: "lowercase",
        backgroundColor: "white",
        color: "black"
    });
  
    const paragraph = document.createElement("p");
    paragraph.textContent ="Welcome Atlas!";
    document.body.appendChild(paragraph);

    const spookyButton = document.createElement("button");
    spookyButton.textContent ="Spoopy";
    document.body.appendChild(spookyButton);
    spookyButton.addEventListener("click", spoopy);

    const darkButton = document.createElement("button");
    darkButton.textContent ="dark mode";
    document.body.appendChild(darkButton);
    darkButton.addEventListener("click", darkMode);

    const scremButton = document.createElement("button");
    scremButton.textContent ="Scream mode";
    document.body.appendChild(scremButton);
    scremButton.addEventListener("click", screamMode);
  }
  main();