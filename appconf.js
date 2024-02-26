function afterConfigRead() {
    var configuredAppType = configCurrentValue();
    var logos = document.querySelector("#logotop");
    var topTexts = [
        "<p>Реализуй 25 штрафных разной сложности,<br>получай бонусы<br>и участвуй в розыгрыше<br>100 000 фрибетов!</p>",
        "<p>Цель игры - забить 25 штрафных!<br>Против тебя вратарь, ветер,<br>снеговик и даже куб с призами!</p>"
    ];

    var rulesTextLabel = document.querySelector("#rulestext-top");

    if (configuredAppType === "0") {
        rulesTextLabel.innerHTML = topTexts[1];
        logos.style.visibility = "hidden";
    }
    else if (configuredAppType === "1") {
        logos.style.visibility = "visible";
        rulesTextLabel.innerHTML = topTexts[0];
    }
}

function configCurrentValue() {
    var container = document.querySelector("#unity-container");
    return container.dataset.value;
}

function readConfig() {
    fetch("config.txt")
        .then((res) => res.text())
        .then((text) => {
            value = text;
            var container = document.querySelector("#unity-container");
            container.dataset.value = value;
            afterConfigRead();
        })
        .catch((e) => console.error(e));
}