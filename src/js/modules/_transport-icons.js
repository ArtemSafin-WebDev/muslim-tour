console.log('Иконки транспорта')

const tourStepsContainers = Array.prototype.slice.call(document.querySelectorAll('.tour-route__steps'))


tourStepsContainers.forEach(container => {
    console.log('Another tour steps container')
    const tourSteps = Array.prototype.slice.call(container.querySelectorAll('.tour-route__step'))
    const tourStepsCount = tourSteps.length;
    const circleWidth = container.querySelector('figure').offsetWidth;
    console.log('Circle width', circleWidth);
    let previousStepElement;
    let currentIteration = 0;
    let offset = 0;
    console.log('Общая ширина контейнера', container.offsetWidth)
    

    for (let step of tourSteps) {
        let position; 
        let previousElementWidth;
        let currentElementWidth;
        let positionToPlaceIcon;
        
        if (currentIteration === tourStepsCount) {
            break;
        }

        if (currentIteration === 0) {
            previousStepElement = step;
        } else if (currentIteration === 1) {
            let icon = step.querySelector('i');
            previousElementWidth = previousStepElement.offsetWidth;
            currentElementWidth = step.offsetWidth;
            position = previousElementWidth + (currentElementWidth / 2);
            positionToPlaceIcon = offset + (position / 2);
            icon.style.left = positionToPlaceIcon + 'px';
            offset = offset + position;
            previousStepElement = step;
        } else if (currentIteration === tourStepsCount - 1) {
            let icon = step.querySelector('i');
            previousElementWidth = previousStepElement.offsetWidth;
            currentElementWidth = step.offsetWidth;
            position = (previousElementWidth / 2) + currentElementWidth;
            positionToPlaceIcon = offset + (position / 2) - (circleWidth / 2);
            icon.style.left = positionToPlaceIcon + 'px';
            offset = offset + position;
            previousStepElement = step;
        } else {
            let icon = step.querySelector('i');
            previousElementWidth = previousStepElement.offsetWidth;
            currentElementWidth = step.offsetWidth;
            position = (previousElementWidth / 2) + (currentElementWidth / 2);
            positionToPlaceIcon = offset + (position / 2);
            icon.style.left = positionToPlaceIcon + 'px';
            offset = offset + position;
            previousStepElement = step;
        }
        // console.log(position);
        console.log('Offset', offset)
        console.log('Icon left margin', positionToPlaceIcon)
        currentIteration++;
    }
});