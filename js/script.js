// селектор выбора автомобиля
const element = document.querySelector('.select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom'
});

// маска для телефона
$(document).ready(function(){
  $('#phone').mask('+7 (000) 000-00-00');
});

// таймер
let countdownDate = new Date().getTime() + (40*60*60*1000) + (30*60*1000); // 3 часа и 30 минут от текущего времени

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

        if (distance < 0) {
            clearInterval(x);
            $('#timer').text("Время истекло");
        }
    }, 1000);

    // автокредит
    let slider = document.getElementById("month");
    let output = document.getElementById("month-view");
    let monthList = {
      0: 2,
      10: 6,
      20: 12,
      30: 24,
      40: 36,
      50: 48,
      60: 60,
      70: 72,
      80: 84,
      90: 96,
    };

    let sliderPercent = document.getElementById("percent");
    let outputPercent = document.getElementById("percent-view");
    let price = 2500000;

    slider.oninput = function() {
      calculateTotalCost();
    }

    sliderPercent.oninput = function() {
      calculateTotalCost();
    }


    /**
     * функция рассчитывает:
     * Количество месяцев
     * Сумму первого взноса
     * Месячный платеж
     *
     * TODO: необходимо добавить процентную ставку и стоимость исходя из выбранного автомобиля
     */
    function calculateTotalCost() {
      let monthCount = monthList[slider.value];
      output.innerHTML = monthCount + " месяцев";
      console.log(monthCount)
      let firstPercent = sliderPercent.value;
      let totalCost = price;
      let percentSum = totalCost * firstPercent / 100;
      outputPercent.innerHTML = percentSum + " ₽";
      let monthPrice = (totalCost - percentSum) / monthCount;
      console.log(monthPrice)
      let outputMonthPrice = document.getElementById("choice-price");
      outputMonthPrice.innerHTML = Math.round(monthPrice) + " ₽";
    }

    calculateTotalCost();

    Fancybox.bind('[data-fancybox="gallery"]', {

    });
