export class FuelCalc{
    constructor(
        formSelector = ''
    ){
        this.form = document.querySelector(formSelector);
        this.distanceInput = this.form.querySelector('input[name="distance"]');
        this.tankedFuelInput = this.form.querySelector('input[name="tanked-fuel"]');
        this.scoreEl = this.form.querySelector('.fuel-consumption');

        ['input', 'reset'].forEach(event => this.form.addEventListener(event, ($event) => this.calculate($event)));
    }

    calculate($event){
        const distance = +this.distanceInput.value;
        const fuel = +this.tankedFuelInput.value;
        
        if(!distance || !fuel || $event.type === 'reset') return this.scoreEl.textContent = `0`;

        const burntFuel = (fuel / distance) * 100;

        this.scoreEl.textContent = burntFuel.toFixed(2);
    }
}