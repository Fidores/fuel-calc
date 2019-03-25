const _scoreEl = new WeakMap();
const _tankedFuelInput = new WeakMap();
const _distanceInput = new WeakMap();
const _form = new WeakMap();

export class FuelCalc{
    constructor(
        formSelector = ''
    ){
        _form.set(this, document.querySelector(formSelector));   
        _distanceInput.set(this, _form.get(this).querySelector('input[name="distance"]'));
        _tankedFuelInput.set(this, _form.get(this).querySelector('input[name="tanked-fuel"]'));
        _scoreEl.set(this, _form.get(this).querySelector('.fuel-consumption'));

        ['input', 'reset'].forEach(event => _form.get(this).addEventListener(event, ($event) => this.calculate($event)));
    }

    calculate($event){
        const distance = + _distanceInput.get(this).value;
        const fuel = +_tankedFuelInput.get(this).value;
        
        if(!distance || !fuel || $event.type === 'reset') return _scoreEl.get(this).textContent = `0`;

        const burntFuel = (fuel / distance) * 100;

        _scoreEl.get(this).textContent = burntFuel.toFixed(2);
    }
}