const LOSS_WEIGHT_NORM = 0.15;
const GAIN_WEIGHT_NORM = 0.15;

const AGE_MIN = 0;
const AGE_MAX = 100;
const HEIGHT_MIN = 40;
const HEIGHT_MAX = 220;
const WEIGHT_MIN = 2;
const WEIGHT_MAX = 500;

const activityFactor = {
    "min": 1.2,
    "low": 1.375,
    "medium": 1.55,
    "high": 1.725,
    "max": 1.9
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

