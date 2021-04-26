export function getDisplayCardNumber(numberInput) {
    const placeholder = "****************";
    const newPlaceholder = placeholder.substr(numberInput.length);

    return numberInput.concat("", newPlaceholder).match(/.{1,4}/g);
}
