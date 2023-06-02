const LOSS_WEIGHT_NORM = 0.15;
const GAIN_WEIGHT_NORM = 0.15;
const ActivityRate = {
    "min": 1.2,
    "low": 1.375,
    "medium": 1.55,
    "high": 1.725,
    "max": 1.9
};
const ValidParameters = {
    AGE_MIN: 0,
    AGE_MAX: 120,
    HEIGHT_MIN: 45,
    HEIGHT_MAX: 220,
    WEIGHT_MIN: 4,
    WEIGHT_MAX: 220
};

const ERROR_SHOW_TIME = 3000;

const showError = (message) => {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = '100';
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = '0';
    alertContainer.style.top = '0';
    alertContainer.style.right = '0';
    alertContainer.style.padding = '0';
    alertContainer.style.fontSize = '40px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = 'red';
    alertContainer.style.height = '130px';
    alertContainer.style.lineHeight = 'normal';
    alertContainer.textContent = message;
    document.body.append(alertContainer);
    setTimeout(() => {
        alertContainer.remove();
    }, ERROR_SHOW_TIME);
};

const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const genderMale = document.querySelector("#gender-male");
const activityMinimal = document.querySelector("#activity-minimal");

const clearField = () => {
    age.value = "";
    height.value = "";
    weight.value = "";
    genderMale.checked = true;
    activityMinimal.checked = true;
}

const isValidateParameters = () => {
    return age.value > ValidParameters.AGE_MIN && age.value < ValidParameters.AGE_MAX && height.value > ValidParameters.HEIGHT_MIN && height.value < ValidParameters.HEIGHT_MAX && weight.value > ValidParameter.WEIGHT_MIN && weight.value < ValidParameter.WEIGHT_MAX
}

const isFilledParameters = () => {
    return age.value && height.value && weight.value;
}

const isExistParameter = () => {
    return age.value || height.value || weight.value;
}


export { isFilledParameters, isExistParameter, clearField, isValidateParameters, showError }
