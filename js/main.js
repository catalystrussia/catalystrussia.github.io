(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var link = 'http://www.catalystteambuilding.ru/izbrannye-programmy/kategorii-timbildingovyh-programm/';
var programs = {
    '1': {
        name: 'Аромат совершенства',
        link: 'creative-team-challenges/aromat-sovershenstva'
    },
    '2': {
        name: 'Важные новости',
        link: 'interactive-business-games/vazhnye-novosti'
    },
    '3': {
        name: 'До предела: Формула 1',
        link: 'innovation-and-invention/do-predela-formula-1'
    },
    '4': {
        name: 'Зная тебя, зная меня',
        link: 'icebreakers-and-energisers/znaya-tebya-znaya-menya'
    },
    '5': {
        name: 'Истина в виски',
        link: 'just-for-fun/whisky-wisdom'
    },
    '6': {
        name: 'Корпоративный бодибилдинг',
        link: 'icebreakers-and-energisers/korporativnyj-bodibilding'
    },
    '7': {
        name: 'Лицо компании',
        link: 'icebreakers-and-energisers/lico-kompanii'
    },
    '8': {
        name: 'Общая картина',
        link: 'creative-team-challenges/obshaya-kartina'
    },
    '9': {
        name: 'Оркеструем!',
        link: 'music-and-rhythm-activities/orkestruem'
    },
    '10': {
        name: 'Пассат',
        link: 'interactive-business-games/passat'
    },
    '11': {
        name: 'Сосисочная сенсация',
        link: 'just-for-fun/sosisochnaya-sensaciya'
    },
    '12': {
        name: 'Творческий поток',
        link: 'interactive-business-games/tvorcheskij-potok'
    },
    '13': {
        name: 'Фабрика игрушек',
        link: 'environment-and-community/fabrika-igrushek'
    },
    '14': {
        name: 'Шедевральная футболка',
        link: 'creative-team-challenges/shedevralnaya-futbolka'
    },
    '15': {
        name: 'Время музыки',
        link: 'icebreakers-and-energisers/vremya-muzyki'
    },
    '16': {
        name: 'До предела: Пирамиды',
        link: 'innovation-and-invention/do-predela-piramidy'
    },
    '17': {
        name: 'Всемирный хоровод',
        link: 'music-and-rhythm-activities/vsemirnyj-horovod'
    },
    '18': {
        name: 'Фул-хаус',
        link: 'icebreakers-and-energisers/ful-haus'
    },
    '19': {
        name: 'Ощути разницу',
        link: 'just-for-fun/oshuti-raznicu'
    },
    '20': {
        name: 'С мира по зерну',
        link: 'interactive-business-games/s-mira-po-zernu'
    }
};


var questions = {
    '1': {
        '1': ["1", "5", "8", "9", "11", "13", "14", "19"],
        '2': ["1", "2", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "19"],
        '3': ["1", "2", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "19"],
        '4': ["1", "2", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]
    },
    '2': {
        '1': ["2", "6", "7", "8", "10", "11", "12", "14", "15", "17"],
        '2': ["2", "6", "10", "11", "17"],
        '3': ["1", "2", "7", "8", "10", "11", "12", "13", "16"],
        '4': ["5", "19", "17"]
    },
    '3': {
        '1': ["1", "5", "8", "10", "11", "13", "14", "15", "17"],
        '2': ["1", "2", "5", "8", "9", "10", "11", "12", "13", "14", "15", "17", "19"],
        '3': ["1", "2", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "19"],
        '4': ["1", "2", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "19"]
    },
    '4': {
        '1': ["1", "2", "6", "8", "9", "10", "11", "12", "14", "15", "16", "17"],
        '2': ["1", "2", "5", "6", "7", "8", "9", "10", "11", "12", "14", "15", "16", "17", "19"],
        '3': ["1", "2", "5", "6", "7", "8", "9", "10", "11", "14", "15", "16", "17", "19"],
        '4': ["1", "6", "7", "8", "9", "11", "14", "15", "16", "17", "19"]
    },
    '5': {
        '1': ["1", "2", "8", "9", "14", "17"],
        '2': ["5", "6", "8", "9", "10", "11", "15", "17", "19"],
        '3': ["1", "2", "6", "11", "12", "17"],
        '4': ["1", "7", "9", "13", "16", "17"]
    }
};

var $programLink = $('#program-link');
var $inputs = $('input');
var $cardId = 1;

var test = {
    /**
     * Вернет рандомное число от min до max
     * @param min
     * @param max
     * @returns {*}
     */
    randomInteger: function (min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    },

    /**
     * Показать карточку с вопросом
     * @param id
     */
    showActiveCard: function (id) {
        $cardId = id;
        var $card = $('#test' + id);

        var $sibling = $card.siblings('.active');
        $sibling.removeClass('active').addClass('inactive');
        $card.addClass('active');

        setTimeout(function () {
            $sibling.removeClass('inactive');
        }, 320);
    },

    /**
     * Вычисляем программу по ответам
     */
    changeProgram: function () {
        var answers = {};
        $('input:radio:checked').each(function () {
            var question = $(this).attr('name');
            answers[question] = questions[question][$(this).val()];
        });

        var intersection = _.intersection(answers[1], answers[2], answers[3], answers[4], answers[5]);

        //for (var i = 1; i < 6; i++) {
        //    console.log(answers[i]);
        //}
        //console.log(intersection);

        var resultProgram = programs[intersection[test.randomInteger(0, intersection.length - 1)]];
        //console.log(resultProgram);

        if(!resultProgram) {
            resultProgram = programs[15];
        }

        $programLink.attr('href', link + resultProgram.link);
        $programLink.html('<i class="material-icons left">done</i> Получить программу');
    },

    /**
     * Выделяет активный таб и все левее его цветом
     * @param id
     */
    selectActiveTab: function (id) {
        for (var i = 1; i < 7; i++) {
            if (i < id) {
                $('.tab' + i).addClass('ready');
            } else {
                $('.tab' + i).removeClass('ready');
            }
        }
        if (id == 6) {
            $('.indicator').hide()
        } else {
            $('.indicator').show()
        }
    }
};



$inputs.on('change', test.changeProgram);
$inputs.on('click', function () {
    setTimeout(function () {
        $('.tab' + (+$cardId + 1)).click();
    }, 300);
});

$programLink.on('click', function () {
    if ($(this).hasClass('disabled')) {
        return false;
    }
});

$('.tab a').on('click', function () {
    test.selectActiveTab($(this).data('id'));
    test.showActiveCard($(this).data('id'));
});

test.changeProgram();

},{}]},{},[1]);
