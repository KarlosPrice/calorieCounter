const LOSS_WEIGHT_NORM = 0.15;
const GAIN_WEIGHT_NORM = 0.15;
const ActivityRate = {
    "min": 1.2,
    "low": 1.375,
    "medium": 1.55,
    "high": 1.725,
    "max": 1.9
};
const ValidParameter = {
    AGE_MIN: 0,
    AGE_MAX: 130,
    HEIGHT_MIN: 60,
    HEIGHT_MAX: 250,
    WEIGHT_MIN: 2,
    WEIGHT_MAX: 500
}

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
    alertContainer.style.backgroundColor = 'orange';
    alertContainer.style.height = '130px';
    alertContainer.style.lineHeight = 'normal';
    alertContainer.style.borderWidth = '5px';
    alertContainer.style.borderStyle = 'solid';
    alertContainer.style.borderColor = 'red';
    alertContainer.style.borderRadius = '20px';
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

const clearParameters = () => {
    age.value = "";
    height.value = "";
    weight.value = "";
    genderMale.checked = true;
    activityMinimal.checked = true;
}

const isValidateParameters = () => {
    return age.value > ValidParameter.AGE_MIN && age.value < ValidParameter.AGE_MAX && height.value > ValidParameter.HEIGHT_MIN && height.value < ValidParameter.HEIGHT_MAX && weight.value > ValidParameter.WEIGHT_MIN && weight.value < ValidParameter.WEIGHT_MAX
}

const isFilledParameters = () => {
    return age.value && height.value && weight.value;
}

const isExistParameter = () => {
    return age.value || height.value || weight.value;
}

const getNormMale = () => {
    return (10 * parseInt(weight.value, 10) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) + 5);
}

const getNormFemale = () => {
    return (10 * parseInt(weight.value, 10) + (6.25 * parseInt(height.value, 10)) - (5 * parseInt(age.value, 10)) - 161);
}
const getNorm = () => {
    const genderMale = document.querySelector("#gender-male");
    if (genderMale.checked) {
        return getNormMale();
    }
    return getNormFemale();
}

const getActivityRate = () => {
    const activityValue = document.querySelector('[name="activity"]:checked').value;
    return ActivityRate[activityValue];
}

const getMaintainWeight = () => {
    return Math.round(getActivityRate() * getNorm());
}

const getLossWeight = () => {
    return Math.round(getMaintainWeight() - getMaintainWeight() * LOSS_WEIGHT_NORM);
}

const getGainWeight = () => {
    return Math.round(getMaintainWeight() + getMaintainWeight() * GAIN_WEIGHT_NORM);
}

export {getMaintainWeight, getLossWeight, getGainWeight, isFilledParameters, isExistParameter, clearParameters, isValidateParameters, showError}
